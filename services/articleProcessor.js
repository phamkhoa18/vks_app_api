// services/articleProcessor.js
import Article from "../models/Article.js";
import Section from "../models/Section.js";
import Utils from "./Utils.js";
import { callChatGPT } from "../utils/ai.js";
import Topic from "../models/Topic.js";

/**
 * Process: lấy 30 bài mới nhất, lọc bằng ChatGPT -> chọn 15 bài -> tạo topics + section
 */
export const processArticlesToTopics = async (limit = 15, fetchCount = 30) => {
  try {
    console.log(`🚀 Process: lấy ${fetchCount} bài mới nhất để ChatGPT chọn ${limit} bài...`);

    // 1. Lấy 30 bài viết mới nhất chưa dùng trong topic
    const recentArticles = await Article.find()
      .sort({ createdAt: -1 })
      .limit(fetchCount);

    if (!recentArticles.length) {
      console.log("❌ Không có bài viết mới nào");
      return null;
    }

    console.log(`📚 Có ${recentArticles.length} bài viết, gửi cho ChatGPT đánh giá...`);

    // 2. Tạo prompt để ChatGPT lọc bài
    const prompt = `
    Tôi có ${recentArticles.length} bài báo mới nhất. 
    Hãy chọn ra ${limit} bài báo quan trọng, đa dạng chủ đề, ít trùng lặp nội dung.
    Trả về danh sách ID của các bài đã chọn (theo _id MongoDB).
    
    Danh sách bài viết:
    ${recentArticles.map(a => `- [${a._id}] ${a.title}`).join("\n")}
    `;

    const response = await callChatGPT(prompt);

    // 3. Parse kết quả từ ChatGPT (ví dụ trả về list ID)
    const selectedIds = extractIdsFromResponse(response); 
    const finalArticles = recentArticles.filter(a => selectedIds.includes(a._id.toString()));

    console.log(`✅ ChatGPT chọn được ${finalArticles.length} bài`);

    if (!finalArticles.length) {
      console.log("⚠️ ChatGPT không trả bài nào hợp lệ");
      return null;
    }

    // 4. Sinh topics từ 15 bài được chọn
    const topicsData = await Utils.generateTopicsFromArticles(finalArticles);
    const savedTopics = await Utils.saveTopicsToDatabase(topicsData);

    // 5. Cập nhật flag isUsedInTopic = true
    await Article.updateMany(
      { _id: { $in: finalArticles.map(a => a._id) } },
      { $set: { isUsedInTopic: true } }
    );

    // 6. Tạo Section
    const section = await Utils.createSectionFromTopics(savedTopics, finalArticles);

    // 7. Populate để trả về kết quả đầy đủ
    const fullSection = await Section.findById(section._id)
      .populate({
        path: "topics",
        populate: {
          path: "articles",
          select: "title slug publishDate image summary"
        }
      });

    console.log(`🎉 Hoàn thành Section: ${fullSection.title}`);
    return fullSection;

  } catch (error) {
    console.error("❌ Lỗi processArticlesToTopics:", error.message);
    throw error;
  }
};

/**
 * Hàm phụ để parse ID từ response ChatGPT
 * Ví dụ ChatGPT trả về: "Chọn: [id1, id2, id3...]"
 */
function extractIdsFromResponse(response) {
  try {
    const matches = response.match(/([a-f\d]{24})/gi);
    return matches ? matches.map(m => m.trim()) : [];
  } catch (e) {
    console.error("❌ Không parse được ID từ ChatGPT:", e.message);
    return [];
  }
}
