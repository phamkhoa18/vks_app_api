import express from 'express';
import Crawl from '../crawl.js';
import RssCrawl from '../rss.js';

const router = express.Router();

// Router (đường dẫn)
router.post('/kiemsat', Crawl.scrapeKiemSat);
router.post('/baohephapluat', Crawl.scrapeBaoVePhapLuat);
router.post('/rss_congly', RssCrawl.fetchRssData_congly);
router.post('/rss_vnexpress', RssCrawl.fetchRssData_vnexpress);
router.post('/rss_tuoitre', RssCrawl.fetchRssData_tuoitre);
router.post('/rss_thanhnien', RssCrawl.fetchRssData_thanhnien);
router.post('/rss_luatvietnam', RssCrawl.fetchRssData_luatvietnam);
router.post('/anle', Crawl.scrapeNhanChinh);
router.post('/xaydungchinhsach',Crawl.scrapeXayDungChinhSach);
router.post('/vksdaklak',Crawl.scrapeVKSDakLak);
router.post('/vksdanang',Crawl.scrapeVKSDaNang);
router.post('/tapchitoaan', Crawl.scrapeTapChiToaAn);

export default router;