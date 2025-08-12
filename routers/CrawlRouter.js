import express from 'express';
import Crawl from '../crawl.js';

const router = express.Router();

// Router (đường dẫn)
router.post('/kiemsat', Crawl.scrapeKiemSat);
router.post('/baohephapluat', Crawl.scrapeBaoVePhapLuat);

export default router;