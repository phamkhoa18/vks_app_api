import Utils from './services/Utils.js';

async function test() {
  await Utils.connectDB();
  const section = await Utils.processArticlesToTopics(15);
  console.log('Section created:', section);
  
  // Hoặc lấy tất cả sections
  const allSections = await Utils.getSectionsWithTopics();
  console.log('All sections:', allSections);
}

test();