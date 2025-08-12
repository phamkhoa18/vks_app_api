import { SmartCrawler } from 'crawl4ai'

const crawlKiemSatCategory = async () => {
  const startUrl = 'https://kiemsat.vn/kiem-sat-24h';
  const visited = new Set();
  const maxPages = 10; // Số trang tối đa muốn crawl

  const crawler = new SmartCrawler({
    headless: true,
    maxConcurrency: 3,
    timeout: 30000,
  });

  const articles = [];

  // Hàm xử lý 1 trang
  const handlePage = async (url) => {
    if (visited.has(url) || visited.size >= maxPages) return;
    visited.add(url);

    console.log(`🕸️ Crawling: ${url}`);

    const result = await crawler.crawl(url);

    const links = result?.links || [];

    for (const link of links) {
      if (
        link.includes('/kiem-sat-24h/') &&
        !link.includes('#') &&
        !link.includes('?') &&
        !visited.has(link)
      ) {
        articles.push(link);
      }
    }

    // Auto detect "next page"
    const next = result?.nextPage;
    if (next && typeof next === 'string') {
      await handlePage(next);
    } else {
      // thử tìm link chứa từ "trang" (hoặc page=2 dạng đó)
      const nextLink = links.find(l => l.match(/trang-[0-9]+\.htm/i) || l.match(/page=[0-9]+/i));
      if (nextLink) await handlePage(nextLink);
    }
  };

  await handlePage(startUrl);

  // In kết quả
  const uniqueArticles = [...new Set(articles)];
  uniqueArticles.forEach((link, i) => {
    console.log(`[${i + 1}] 🔗 ${link}`);
  });

  process.exit();
};

crawlKiemSatCategory();
