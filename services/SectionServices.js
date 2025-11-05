import Article from '../models/Article.js';
import Section from '../models/Section.js';
import Topic from '../models/Topic.js';
import { selectTopArticles, analyzeArticlesForTopics } from './openai.js';
import slugify from 'slugify';

export const createSectionWithTopics = async () => {
  let newSection = null;
  const createdTopicIds = [];
  const updatedArticleIds = [];

  try {
    console.log('Step 1: Fetching 30 unused articles...');
    const articles = await Article.find({ isUsedInTopic: false })
      .sort({ publishDate: -1 })
      .limit(30)
      .lean();
    console.log(`Found ${articles.length} unused articles.`);

    if (articles.length < 30) {
      throw new Error(`Not enough unused articles available. Found only ${articles.length}.`);
    }

    console.log('Step 2: Selecting 15 top articles with AI...');
    const selectedArticleIds = await selectTopArticles(articles);
    console.log('Selected Article IDs:', selectedArticleIds);

    const selectedArticles = articles.filter(article =>
      selectedArticleIds.includes(article._id.toString())
    );
    console.log(`Selected ${selectedArticles.length} articles`);

    // Log IDs that didn't match
    const missingIds = selectedArticleIds.filter(id => 
      !articles.some(article => article._id.toString() === id)
    );
    if (missingIds.length > 0) {
      console.warn('Missing article IDs:', missingIds);
    }

    // Fallback: If fewer than 15 articles, randomly select more
    let finalArticles = selectedArticles;
    if (selectedArticles.length < 15) {
      console.warn(`Only ${selectedArticles.length} articles selected, adding more randomly...`);
      const remainingArticles = articles.filter(
        article => !selectedArticleIds.includes(article._id.toString())
      );
      const needed = 15 - selectedArticles.length;
      finalArticles = selectedArticles.concat(
        remainingArticles.sort(() => Math.random() - 0.5).slice(0, needed)
      );
    }

    if (finalArticles.length !== 15) {
      throw new Error(`Failed to select exactly 15 articles. Got ${finalArticles.length}.`);
    }

    console.log('Step 3: Analyzing for topics...');
    const topicsData = await analyzeArticlesForTopics(finalArticles);
    console.log('Topics generated:', JSON.stringify(topicsData, null, 2));

    if (!Array.isArray(topicsData) || topicsData.length === 0) {
      throw new Error('Invalid or empty topics data returned from OpenAI');
    }

    // Tạo section và save tạm để có ID (sẽ cleanup nếu có lỗi)
    console.log('Step 4: Creating section...');
    const currentDate = new Date();
    const sectionTitle = `Bản tin pháp luật ${currentDate.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })} - ${currentDate.toLocaleDateString('vi-VN')}`;
    const sectionSlug = slugify(sectionTitle, { lower: true, strict: true });
    newSection = new Section({
      title: sectionTitle,
      slug: sectionSlug,
      description: 'Bản tin pháp luật hàng ngày',
      summary: 'Tóm tắt các tin tức pháp luật nổi bật',
      sectionTime: currentDate,
      topics: [], // Khởi tạo rỗng, sẽ update sau
    });
    await newSection.save(); // Save để có ID cho topics
    console.log('Step 4: Section created:', newSection._id);

    console.log('Step 5: Creating topics and assigning articles...');
    const articleMap = new Map(finalArticles.map(a => [a._id.toString(), a]));
    const usedArticleIds = new Set();

    // Tạo tất cả topics
    for (let i = 0; i < topicsData.length; i++) {
      const topicData = topicsData[i];
      if (!topicData.title || !Array.isArray(topicData.articleIds)) {
        console.warn(`Invalid topic data at index ${i}:`, topicData);
        continue;
      }

      const topicTitle = topicData.title.trim();
      if (!topicTitle) {
        console.warn(`Empty topic title at index ${i}, skipping.`);
        continue;
      }

      const topicSlug = slugify(topicTitle, { lower: true, strict: true });
      const topicArticles = topicData.articleIds
        .map(id => articleMap.get(id))
        .filter(article => article && !usedArticleIds.has(article._id.toString()))
        .map(article => {
          usedArticleIds.add(article._id.toString());
          return article._id;
        });

      if (topicArticles.length === 0) {
        console.warn(`Topic "${topicTitle}" has no valid articles, skipping.`);
        continue;
      }

      try {
        const newTopic = new Topic({
          title: topicTitle,
          slug: topicSlug,
          articles: topicArticles,
          section: newSection._id,
        });
        await newTopic.save();
        createdTopicIds.push(newTopic._id);
        updatedArticleIds.push(...topicArticles.map(id => id.toString()));
        console.log(`Topic ${createdTopicIds.length} created: ${topicTitle} with ${topicArticles.length} articles`);

        // Đánh dấu articles đã sử dụng
        await Article.updateMany(
          { _id: { $in: topicArticles } },
          { $set: { isUsedInTopic: true } }
        );
      } catch (topicError) {
        console.error(`Error creating topic "${topicTitle}":`, topicError);
        // Tiếp tục với topic tiếp theo thay vì dừng lại
        continue;
      }
    }

    // Kiểm tra có tạo được ít nhất 1 topic không
    if (createdTopicIds.length === 0) {
      throw new Error('Failed to create any topics. No valid topics were created.');
    }

    console.log(`Step 6: Updating section with ${createdTopicIds.length} topics...`);
    // Update section với topics đã tạo thành công
    newSection.topics = createdTopicIds;
    await newSection.save();
    console.log('Section updated successfully with topics');

    console.log(`Section completed: ${createdTopicIds.length} topics, ${updatedArticleIds.length} articles used.`);
    return await newSection.populate('topics');
  } catch (error) {
    console.error('❌ Error in createSectionWithTopics:', error);
    
    // Cleanup: Xóa section và topics đã tạo nếu có lỗi
    try {
      console.log('🧹 Starting cleanup process...');
      
      // 1. Xóa topics trước (nếu có)
      if (createdTopicIds.length > 0) {
        console.log(`Cleaning up: Deleting ${createdTopicIds.length} topics...`);
        await Topic.deleteMany({ _id: { $in: createdTopicIds } });
        console.log('✅ Topics deleted successfully');
      }

      // 2. Xóa section (nếu có)
      if (newSection && newSection._id) {
        console.log('Cleaning up: Deleting section...');
        await Section.findByIdAndDelete(newSection._id);
        console.log('✅ Section deleted successfully');
      }

      // 3. Rollback: Đánh dấu articles chưa sử dụng lại
      if (updatedArticleIds.length > 0) {
        console.log(`Rolling back: Resetting ${updatedArticleIds.length} articles...`);
        await Article.updateMany(
          { _id: { $in: updatedArticleIds } },
          { $set: { isUsedInTopic: false } }
        );
        console.log('✅ Articles rolled back successfully');
      }
      
      console.log('🧹 Cleanup completed');
    } catch (cleanupError) {
      console.error('❌ Error during cleanup:', cleanupError);
      // Không throw cleanup error, chỉ log để không che giấu lỗi gốc
    }

    throw error;
  }
};