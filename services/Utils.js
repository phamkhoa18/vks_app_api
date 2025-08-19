import dotenv from 'dotenv';
dotenv.config();
import slugify from 'slugify';
import mongoose from 'mongoose';
import { GoogleGenAI } from '@google/genai';

// Import các model
import Article from '../models/Article.js';
import Topic from '../models/Topic.js';
import Section from '../models/Section.js';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const Utils = {

    ai_summary: async (content) => {
    const prompt = `
    Bạn hãy tóm tắt nội dung dưới đây dành cho app tin tức, với yêu cầu:

    - Tóm tắt thành một danh sách 3-5 ý chính, mỗi ý là một câu ngắn, rõ ràng, dễ hiểu.
    - Mỗi ý bắt đầu bằng "- " (gạch ngang + dấu cách).
    - Nội dung tóm tắt phải đủ ý, giúp người đọc nắm nhanh được điểm chính của bài báo mà không cần đọc hết.
    - Phần cuối cùng, viết một đoạn **bài văn tóm tắt tổng thể dài, mạch lạc, đầy đủ và dễ hiểu**, viết liền mạnh không xuống dòng ,như một bài viết ngắn, bọc trong thẻ div với class="summary".
    - Đặt dấu phân cách 3 gạch ngang "---" trước đoạn tóm tắt tổng thể để dễ phân biệt.

    Nội dung gốc:
    """${content}"""

    Kết quả trả về đúng định dạng:

    - Ý chính 1
    - Ý chính 2
    - Ý chính 3
    ---
    <div class="summary">Đoạn bài văn tóm tắt tổng thể dài, đầy đủ các ý chính, được viết mạch lạc, dễ nghe như một bài báo ngắn.</div>
    `;
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemma-3-27b-it',
            contents: prompt,
        });

        const text = response.text.trim();

        // Tách phần ý chính và phần tóm tắt tổng thể theo dấu phân cách ---
        const parts = text.split('---');

        // Phần ý chính (mảng các dòng bắt đầu '- ')
        const summaryArray = (parts[0] || '')
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.startsWith('- '))
          .map(line => line.substring(2)); // loại bỏ '- '

        // Phần tóm tắt tổng thể bên trong <div class="summary">...</div>
        let summary = '';
        if (parts[1]) {
          const match = parts[1].match(/<div\s+class=["']summary["']>([\s\S]*?)<\/div>/i);
          if (match && match[1]) {
            summary = match[1].trim();
          }
        }

        console.log('📝 Summary Array:', summaryArray);
        console.log('📄 Summary Text:', summary);
        
        // Trả về object chứa 2 trường
        return {
          summaryArray: summaryArray,
          summary: summary,
        };
        
    } catch (error) {
        console.error('❌ Lỗi khi gọi AI summary:', error.message);
        
        // Fallback: trả về summary đơn giản nếu AI call fail
        return {
          summaryArray: ['Nội dung được tóm tắt tự động'],
          summary: content.substring(0, 200) + '...',
        };
    }
},

  // NEW: Tạo summary tổng hợp cho Section từ tất cả articles
  generateSectionSummary: async (articles) => {
    try {
      console.log(`📝 Đang tạo summary tổng hợp từ ${articles.length} bài viết...`);

      if (!articles || articles.length === 0) {
        return "Không có bài viết để tóm tắt.";
      }

      // Chuẩn bị nội dung từ tất cả bài viết (title + summary)
      const allContent = articles.map((article, index) => {
        const content = article.summary || article.content?.substring(0, 300) || '';
        return `${index + 1}. ${article.title}: ${content}`;
      }).join('\n\n');

      const prompt = `
      Bạn hãy tóm tắt tổng hợp tất cả các tin tức pháp luật dưới đây thành một bản tin ngắn gọn, dễ hiểu:

      YÊU CẦU:
      - Viết như một bản tin tổng hợp, bắt đầu bằng "Trong ngày hôm nay, lĩnh vực pháp luật có những diễn biến..."
      - Tóm tắt các điểm chính, xu hướng, vấn đề nổi bật từ tất cả các bài viết
      - Độ dài khoảng 150-200 từ, viết liền mạch, dễ nghe
      - Phong cách như MC đọc bản tin, tự nhiên và thu hút
      - Kết thúc bằng câu tổng kết về tình hình pháp luật

      CÁC BÀI VIẾT:
      ${allContent}

      BẢN TIN TỔNG HỢP (chỉ trả về nội dung, không cần format):
      `;

      const response = await ai.models.generateContent({
        model: 'gemma-3-27b-it',
        contents: prompt,
      });

      const summary = response.text.trim();
      console.log('✅ Đã tạo summary tổng hợp:', summary.substring(0, 100) + '...');
      
      return summary;

    } catch (error) {
      console.error('❌ Lỗi khi tạo section summary:', error.message);
      
      // Fallback summary
      const topicCount = new Set(articles.map(a => a.categories?.[0]?.name || 'Pháp luật')).size;
      return `Trong ngày hôm nay, có ${articles.length} tin tức pháp luật quan trọng thuộc ${topicCount} lĩnh vực khác nhau. Các vấn đề được đề cập bao gồm cập nhật chính sách, xử lý vi phạm và những diễn biến mới trong hệ thống pháp luật Việt Nam.`;
    }
  },

  // Database connection function
  connectDB: async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
      process.exit(1); // Exit process with failure
    }
  },

  // generateSlug ramdom 3 key, output ( slug + 3 key ramdom )
  generateSlug: (text) => {
    // Tạo slug cơ bản
    const baseSlug = slugify(text, {
      lower: true,      // chuyển thành chữ thường
      strict: true,     // chỉ cho phép chữ, số, dấu '-'
      remove: /[*+~.()'"!:@]/g  // loại bỏ ký tự đặc biệt
    });
    
    // Tạo 3 ký tự random (chữ và số)
    const randomSuffix = Math.random()
      .toString(36)      // chuyển sang base36 (0-9, a-z)
      .substring(2, 5);  // lấy 3 ký tự từ vị trí 2-4
    
    // Kết hợp slug với random suffix
    return `${baseSlug}-${randomSuffix}`;
  },

  // Tạo topics từ articles (giới hạn tối đa 5-6 topics)
  generateTopicsFromArticles: async (articles) => {
    try {
      console.log(`🤖 Đang phân tích ${articles.length} bài viết để tìm chủ đề...`);

      // Chuẩn bị data (chỉ title + summary ngắn để tránh quá dài)
      const articlesData = articles.map((article, index) => {
        const shortContent = article.summary;
        return `${index + 1}. "${article.title}" - ${shortContent}`;
      }).join('\n');

      const prompt = `
      Bạn hãy phân tích các bài viết pháp luật sau và TỰ QUYẾT ĐỊNH số lượng chủ đề phù hợp:

      NGUYÊN TẮC:
      - Chỉ nhóm các bài THỰC SỰ có nội dung tương tự/liên quan về pháp luật
      - Nếu bài viết độc lập, khác lĩnh vực pháp luật → để riêng 1 chủ đề  
      - GIỚI HẠN: Tối đa 5-6 chủ đề, ưu tiên gom nhóm thay vì tách riêng
      - Mỗi chủ đề nên có ít nhất 2-3 bài để có ý nghĩa
      - Tiêu đề chủ đề phải PHÙ HỢP với lĩnh vực pháp luật cụ thể

      VÍ DỤ PHÂN LOẠI:
      - Các bài về "tham nhũng, hối lộ, vi phạm kinh tế" → gom thành "Các vụ án tham nhũng và vi phạm kinh tế"
      - Các bài về "viện kiểm sát, truy tố" → gom thành "Hoạt động của Viện Kiểm sát"
      - Các bài về "luật đất đai, bất động sản" → "Chính sách đất đai và bất động sản"
      - Các bài về "tòa án, xét xử, bản án" → gom thành "Hoạt động tòa án và xét xử"
      - Các bài về "vi phạm hành chính, giao thông" → "Xử lý vi phạm hành chính"

      CÁC BÀI VIẾT:
      ${articlesData}

      KẾT QUẢ (JSON format - TỐI ĐA 6 TOPICS):
      {
        "topics": [
          {
            "title": "Tiêu đề chủ đề phù hợp với pháp luật",
            "articleIndexes": [1, 5, 8],
            "reason": "Lý do gom nhóm này (cùng lĩnh vực pháp luật)"
          },
          {
            "title": "Chủ đề pháp luật khác",
            "articleIndexes": [2, 7],
            "reason": "Bài này thuộc lĩnh vực pháp luật khác"
          }
        ],
        "summary": "Tóm tắt cách phân chia: X chủ đề chính, Y bài được gom nhóm hiệu quả"
      }
      `;

      const response = await ai.models.generateContent({
        model: 'gemma-3-27b-it',
        contents: prompt,
      });

      const responseText = response.text.trim();
      console.log('🤖 AI Analysis Response:', responseText);

      // Parse JSON response
      let topicsData;
      try {
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          topicsData = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error('Không tìm thấy JSON trong response');
        }
      } catch (parseError) {
        console.error('❌ Lỗi parse JSON:', parseError.message);
        // Fallback: gom thành 5 chủ đề đơn giản
        const articlesPerTopic = Math.ceil(articles.length / 5);
        topicsData = {
          topics: [],
          summary: `${Math.min(5, articles.length)} chủ đề được tạo tự động (fallback mode)`
        };
        
        for (let i = 0; i < Math.min(5, articles.length); i++) {
          const startIndex = i * articlesPerTopic;
          const endIndex = Math.min(startIndex + articlesPerTopic, articles.length);
          const articleIndexes = [];
          
          for (let j = startIndex; j < endIndex; j++) {
            articleIndexes.push(j + 1);
          }
          
          if (articleIndexes.length > 0) {
            topicsData.topics.push({
              title: `Nhóm tin pháp luật ${i + 1}`,
              articleIndexes: articleIndexes,
              reason: "Phân nhóm tự động"
            });
          }
        }
      }

      // Xử lý kết quả và giới hạn tối đa 6 topics
      let result = topicsData.topics.map(topic => {
        const topicArticles = topic.articleIndexes
          .map(index => articles[index - 1]) // Convert to 0-based index
          .filter(article => article); // Remove undefined

        return {
          title: topic.title,
          slug: Utils.generateSlug(topic.title),
          articles: topicArticles,
          articleIds: topicArticles.map(a => a._id),
          reason: topic.reason || '',
          articleCount: topicArticles.length
        };
      }).filter(topic => topic.articles.length > 0); // Remove empty topics

      // Giới hạn tối đa 6 topics
      if (result.length > 6) {
        console.log(`⚠️ Có ${result.length} topics, giới hạn xuống 6 topics`);
        result = result.slice(0, 6);
      }

      console.log('✅ Kết quả phân tích topics (tối đa 6):');
      console.log(`📊 Tổng: ${result.length} chủ đề từ ${articles.length} bài viết`);
      result.forEach((topic, index) => {
        console.log(`📌 ${index + 1}. "${topic.title}" - ${topic.articleCount} bài - ${topic.reason}`);
      });

      return result;

    } catch (error) {
      console.error('❌ Lỗi khi tạo topics:', error.message);
      
      // Fallback: tạo tối đa 5 topics
      const articlesPerTopic = Math.ceil(articles.length / 5);
      const fallbackTopics = [];
      
      for (let i = 0; i < Math.min(5, articles.length); i++) {
        const startIndex = i * articlesPerTopic;
        const endIndex = Math.min(startIndex + articlesPerTopic, articles.length);
        const topicArticles = articles.slice(startIndex, endIndex);
        
        if (topicArticles.length > 0) {
          fallbackTopics.push({
            title: `Nhóm tin pháp luật ${i + 1}`,
            slug: Utils.generateSlug(`nhom-tin-phap-luat-${i + 1}`),
            articles: topicArticles,
            articleIds: topicArticles.map(a => a._id),
            articleCount: topicArticles.length,
            reason: "Fallback mode - lỗi AI"
          });
        }
      }
      
      return fallbackTopics;
    }
  },

  // Lưu topics vào database
  saveTopicsToDatabase: async (topicsData) => {
    try {
      const savedTopics = [];

      console.log(`💾 Đang lưu ${topicsData.length} topics vào database (tối đa 6)...`);

      for (const topicData of topicsData) {
        // Kiểm tra topic đã tồn tại chưa (theo title)
        let existingTopic = await Topic.findOne({ 
          title: topicData.title 
        });

        if (existingTopic) {
          // Update articles nếu topic đã tồn tại
          const uniqueArticleIds = [...new Set([
            ...existingTopic.articles.map(id => id.toString()), 
            ...topicData.articleIds.map(id => id.toString())
          ])];
          
          existingTopic.articles = uniqueArticleIds;
          await existingTopic.save();
          savedTopics.push(existingTopic);
          console.log(`📝 Cập nhật topic: "${existingTopic.title}" - ${uniqueArticleIds.length} bài`);
        } else {
          // Tạo topic mới
          const newTopic = new Topic({
            title: topicData.title,
            slug: topicData.slug,
            articles: topicData.articleIds
          });
          await newTopic.save();
          savedTopics.push(newTopic);
          console.log(`✨ Tạo topic mới: "${newTopic.title}" - ${topicData.articleIds.length} bài`);
        }
      }

      console.log(`✅ Đã lưu thành công ${savedTopics.length} topics vào database`);
      return savedTopics;

    } catch (error) {
      console.error('❌ Lỗi khi lưu topics vào database:', error.message);
      throw error;
    }
  },

  // UPDATED: Tạo section từ topics với summary tổng hợp
  createSectionFromTopics: async (savedTopics, allArticles) => {
    try {
      console.log(`📑 Đang tạo section từ ${savedTopics.length} topics...`);
      
      // Tạo section title dựa vào thời gian
      const now = new Date();
      const timeStr = now.toLocaleTimeString('vi-VN', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
      const dateStr = now.toLocaleDateString('vi-VN');
      
      const sectionTitle = `Bản tin pháp luật ${timeStr} - ${dateStr}`;
      
      // Tạo summary tổng hợp từ tất cả articles
      console.log('📝 Đang tạo summary tổng hợp...');
      const sectionSummary = await Utils.generateSectionSummary(allArticles);
      
      // Tạo section mới với summary
      const section = new Section({
        title: sectionTitle,
        slug: Utils.generateSlug(sectionTitle),
        description: `Tổng hợp ${savedTopics.length} chủ đề chính về tin tức pháp luật`,
        summary: sectionSummary, // NEW: Thêm summary tổng hợp
        topics: savedTopics.map(t => t._id),
        sectionTime: now
      });
      
      await section.save();
      
      // Update topics với section ID
      await Topic.updateMany(
        { _id: { $in: savedTopics.map(t => t._id) } },
        { section: section._id }
      );
      
      console.log(`✅ Đã tạo section: "${sectionTitle}" với ${savedTopics.length} topics và summary tổng hợp`);
      return section;
      
    } catch (error) {
      console.error('❌ Lỗi tạo section:', error.message);
      throw error;
    }
  },

  // Lấy topics với articles để hiển thị
  getTopicsWithArticles: async () => {
    try {
      const topics = await Topic.find({ isActive: true })
        .populate({
          path: 'articles',
          options: { 
            sort: { publishDate: -1 },
            limit: 5 // Giới hạn 5 bài mỗi topic
          }
        })
        .sort({ createdAt: -1 });

      console.log(`📖 Lấy được ${topics.length} topics với articles`);
      return topics;

    } catch (error) {
      console.error('❌ Lỗi khi lấy topics:', error.message);
      return [];
    }
  },

  // Lấy sections với topics và articles
  getSectionsWithTopics: async () => {
    try {
      const sections = await Section.find({ isActive: true })
        .populate({
          path: 'topics',
          populate: {
            path: 'articles',
            select: 'title slug publishDate image summary',
            options: { 
              sort: { publishDate: -1 },
              limit: 3 // Chỉ lấy 3 bài đầu mỗi topic
            }
          }
        })
        .sort({ createdAt: -1 })
        .limit(10); // Lấy 10 sections gần nhất

      console.log(`📖 Lấy được ${sections.length} sections với topics`);
      return sections;

    } catch (error) {
      console.error('❌ Lỗi khi lấy sections:', error.message);
      return [];
    }
  },

  // UPDATED: Chạy full process với summary tổng hợp
  processArticlesToTopics: async (limit = 15) => {
    try {
      console.log(`🚀 Bắt đầu process tạo topics từ ${limit} bài viết gần nhất (tối đa 6 topics)...`);
      
      // Lấy articles gần nhất
      const recentArticles = await Article.find()
        .sort({ createdAt: -1 })
        .limit(limit);

      if (recentArticles.length === 0) {
        console.log('❌ Không tìm thấy bài viết nào');
        return null;
      }

      console.log(`📚 Tìm thấy ${recentArticles.length} bài viết để xử lý`);

      // Tạo topics từ articles (tối đa 6)
      const topicsData = await Utils.generateTopicsFromArticles(recentArticles);

      // Lưu topics vào database
      const savedTopics = await Utils.saveTopicsToDatabase(topicsData);

      // Tạo section từ topics với summary tổng hợp
      const section = await Utils.createSectionFromTopics(savedTopics, recentArticles);

      console.log(`🎉 Hoàn thành! Đã tạo section với ${savedTopics.length} topics và summary tổng hợp`);
      
      // Trả về section đầy đủ thông tin
      const fullSection = await Section.findById(section._id)
        .populate({
          path: 'topics',
          populate: {
            path: 'articles',
            select: 'title slug publishDate image summary'
          }
        });

      return fullSection;

    } catch (error) {
      console.error('❌ Lỗi trong process tạo topics:', error.message);
      throw error;
    }
  }
};

export default Utils;