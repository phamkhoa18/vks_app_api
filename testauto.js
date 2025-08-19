// testauto.js
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import Article from './models/Article.js';
import Topic from './models/Topic.js';
import Section from './models/Section.js';
import Utils from './services/Utils.js';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Database connected');
  } catch (error) {
    console.error('❌ Database error:', error.message);
    process.exit(1);
  }
};

const getRandomArticles = async (limit = 15) => {
  try {
    console.log(`🎲 Lấy ${limit} bài viết ngẫu nhiên...`);
    
    const existingTopics = await Topic.find({}).select('articles');
    const processedIds = [];
    existingTopics.forEach(topic => {
      topic.articles.forEach(id => processedIds.push(id));
    });
    
    console.log(`📊 Đã có ${processedIds.length} bài được xử lý`);
    
    const unprocessedCount = await Article.countDocuments({
      _id: { $nin: processedIds }
    });
    
    console.log(`📚 Còn ${unprocessedCount} bài chưa xử lý`);
    
    if (unprocessedCount === 0) {
      console.log('❌ Không còn bài nào chưa xử lý!');
      return [];
    }
    
    const randomArticles = await Article.aggregate([
      { $match: { _id: { $nin: processedIds } } },
      { $sample: { size: Math.min(limit, unprocessedCount) } }
    ]);
    
    console.log(`✅ Đã chọn ${randomArticles.length} bài ngẫu nhiên`);
    randomArticles.slice(0, 3).forEach((article, i) => {
      console.log(`   ${i + 1}. ${article.title.substring(0, 60)}...`);
    });
    
    return randomArticles;
    
  } catch (error) {
    console.error('❌ Lỗi lấy bài ngẫu nhiên:', error.message);
    return [];
  }
};

const createOneSection = async (articleCount = 15) => {
  try {
    console.log(`\n🎯 === TẠO 1 SECTION TỪ ${articleCount} BÀI NGẪU NHIÊN ===`);
    
    await connectDB();
    
    const randomArticles = await getRandomArticles(articleCount);
    
    if (randomArticles.length < 5) {
      console.log('❌ Không đủ bài viết để tạo section!');
      return;
    }
    
    console.log(`📚 Bắt đầu xử lý ${randomArticles.length} bài viết...`);
    
    console.log('🤖 Đang tạo topics...');
    const topicsData = await Utils.generateTopicsFromArticles(randomArticles);
    
    if (!topicsData || topicsData.length === 0) {
      console.log('❌ Không tạo được topics!');
      return;
    }
    
    console.log('💾 Đang lưu topics...');
    const savedTopics = await Utils.saveTopicsToDatabase(topicsData);
    
    console.log('📑 Đang tạo section...');
    const section = await Utils.createSectionFromTopics(savedTopics, randomArticles);
    
    console.log('\n✅ === HOÀN THÀNH ===');
    console.log(`📝 Section: "${section.title}"`);
    console.log(`🎯 Topics: ${savedTopics.length}`);
    console.log(`📚 Articles: ${randomArticles.length}`);
    console.log(`📊 Summary: ${section.summary ? `Có (${section.summary.length} ký tự)` : 'Không'}`);
    
  } catch (error) {
    console.error('❌ Lỗi tạo section:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('🔒 Đã đóng database');
  }
};

const createMultipleSections = async (sectionCount = 3, articlesPerSection = 15) => {
  try {
    console.log(`\n🎯 === TẠO ${sectionCount} SECTIONS NGẪU NHIÊN ===`);
    console.log(`📚 Mỗi section: ${articlesPerSection} bài viết`);
    
    await connectDB();
    
    const existingTopics = await Topic.find({}).select('articles');
    const processedIds = [];
    existingTopics.forEach(topic => {
      topic.articles.forEach(id => processedIds.push(id));
    });
    
    const allUnprocessed = await Article.find({
      _id: { $nin: processedIds }
    }).lean();
    
    console.log(`📊 Có ${allUnprocessed.length} bài chưa xử lý`);
    
    if (allUnprocessed.length < articlesPerSection) {
      console.log(`❌ Không đủ bài! Cần ${articlesPerSection * sectionCount}, có ${allUnprocessed.length}`);
      return;
    }
    
    const shuffled = allUnprocessed.sort(() => Math.random() - 0.5);
    
    let successCount = 0;
    let currentIndex = 0;
    
    for (let i = 0; i < sectionCount; i++) {
      console.log(`\n🎲 === SECTION ${i + 1}/${sectionCount} ===`);
      
      const batchArticles = shuffled.slice(currentIndex, currentIndex + articlesPerSection);
      
      if (batchArticles.length < 5) {
        console.log('⚠️ Không đủ bài cho section này, dừng lại');
        break;
      }
      
      console.log(`📚 Xử lý ${batchArticles.length} bài (index ${currentIndex}-${currentIndex + batchArticles.length - 1})`);
      
      try {
        const topicsData = await Utils.generateTopicsFromArticles(batchArticles);
        const savedTopics = await Utils.saveTopicsToDatabase(topicsData);
        const section = await Utils.createSectionFromTopics(savedTopics, batchArticles);
        
        successCount++;
        console.log(`✅ Tạo thành công: "${section.title}"`);
        console.log(`   🎯 ${savedTopics.length} topics`);
        console.log(`   📊 Summary: ${section.summary ? 'Có' : 'Không'}`);
        
        currentIndex += articlesPerSection;
        
        if (i < sectionCount - 1) {
          console.log('⏳ Nghỉ 3s...');
          await delay(3000);
        }
        
      } catch (error) {
        console.error(`❌ Lỗi section ${i + 1}:`, error.message);
        currentIndex += articlesPerSection;
      }
    }
    
    console.log('\n🎉 === KẾT QUẢ ===');
    console.log(`✅ Thành công: ${successCount}/${sectionCount} sections`);
    console.log(`📚 Tổng bài xử lý: ${successCount * articlesPerSection}`);
    
  } catch (error) {
    console.error('❌ Lỗi tạo multiple sections:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('🔒 Đã đóng database');
  }
};

const checkStats = async () => {
  try {
    console.log('\n📊 === THỐNG KÊ ===');
    
    await connectDB();
    
    const [totalArticles, existingTopics, totalSections] = await Promise.all([
      Article.countDocuments(),
      Topic.find({}).select('articles'),
      Section.countDocuments()
    ]);
    
    const processedIds = [];
    existingTopics.forEach(topic => {
      topic.articles.forEach(id => processedIds.push(id));
    });
    
    const processedCount = new Set(processedIds.map(id => id.toString())).size;
    const remainingCount = totalArticles - processedCount;
    
    console.log(`📚 Tổng bài viết: ${totalArticles}`);
    console.log(`✅ Đã xử lý: ${processedCount}`);
    console.log(`⏳ Còn lại: ${remainingCount}`);
    console.log(`📑 Tổng sections: ${totalSections}`);
    console.log(`🎯 Tổng topics: ${existingTopics.length}`);
    console.log(`📈 Tiến độ: ${Math.round((processedCount / totalArticles) * 100)}%`);
    
    if (remainingCount > 0) {
      const possibleSections = Math.floor(remainingCount / 15);
      console.log(`💡 Có thể tạo thêm: ${possibleSections} sections (15 bài/section)`);
    }
    
  } catch (error) {
    console.error('❌ Lỗi thống kê:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('🔒 Đã đóng database');
  }
};

// Main function
const main = async () => {
  const args = process.argv.slice(2);
  const command = args[0];
  const param1 = parseInt(args[1]) || 15;
  const param2 = parseInt(args[2]) || 3;
  
  console.log('🚀 === TEST AUTO PROCESSOR ===\n');
  
  switch (command) {
    case 'one':
      await createOneSection(param1);
      break;
      
    case 'multiple':
      await createMultipleSections(param2, param1);
      break;
      
    case 'stats':
      await checkStats();
      break;
      
    default:
      console.log(`
🎲 === CÁCH SỬ DỤNG ===

node testauto.js <command> [params]

Commands:
  one [articles]           - Tạo 1 section từ [articles] bài ngẫu nhiên
  multiple [articles] [count] - Tạo [count] sections, mỗi section [articles] bài  
  stats                    - Xem thống kê

Ví dụ:
  node testauto.js one 20
  node testauto.js multiple 15 5
  node testauto.js stats

Mặc định: 15 bài/section, 3 sections
      `);
      break;
  }
};

// Chạy script
main().catch(error => {
  console.error('❌ Lỗi chính:', error.message);
  process.exit(1);
});