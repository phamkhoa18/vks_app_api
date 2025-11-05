import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routers/UserRouter.js';
import articleRoutes from './routers/ArticleRouter.js';
import CategoryRouter from './routers/CategoryRouter.js';
import CrawlRouter from './routers/CrawlRouter.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import Utils from './services/Utils.js';
import SectionRouter from './routers/SectionRouter.js'
import SavedArticleRouter from './routers/SaveArticleRouter.js'
import { processArticlesToTopics } from "./services/articleProcessor.js";
import DATA from './data.js';

dotenv.config();
// Initialize Express app
const app = express();
app.use(morgan('dev'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to database
Utils.connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/categories' , CategoryRouter);
app.use('/api/crawls',CrawlRouter);
app.use('/api/sections' , SectionRouter);
app.use('/api/savedArticle' ,SavedArticleRouter )
app.get('/api/generation' ,async (req,res) => {
  await processArticlesToTopics(15);
})

// Hàm loại bỏ content khỏi dữ liệu
const removeContent = (data) => {
  return data.map(part => ({
    ...part,
    sections: part.sections.map(section => ({
      ...section,
      subsections: section.subsections.map(subsection => {
        const { content, ...rest } = subsection;
        return rest;
      })
    }))
  }));
};

// Hàm tìm kiếm content theo title
const findContentByTitle = (title) => {
  for (const part of DATA) {
    // Tìm trong sections
    for (const section of part.sections) {
      if (section.title === title) {
        return {
          part: part.part,
          partTitle: part.title,
          sectionTitle: section.title,
          type: 'section',
          subsections: section.subsections.map(sub => ({
            title: sub.title,
            content: sub.content
          }))
        };
      }
      
      // Tìm trong subsections
      for (const subsection of section.subsections) {
        if (subsection.title === title) {
          return {
            part: part.part,
            partTitle: part.title,
            sectionTitle: section.title,
            subsectionTitle: subsection.title,
            type: 'subsection',
            content: subsection.content
          };
        }
      }
    }
  }
  return null;
};

// API endpoint để trả về dữ liệu từ data.js (không có content)
app.get('/api/data', (req, res) => {
  try {
    const dataWithoutContent = removeContent(DATA);
    res.status(200).json({
      success: true,
      data: dataWithoutContent,
      total: dataWithoutContent.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching data',
      error: error.message
    });
  }
});

// API endpoint để lấy content chi tiết theo title
app.post('/api/data/detail', (req, res) => {
  try {
    const { title } = req.body;
    
    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Title is required'
      });
    }
    
    const result = findContentByTitle(title);
    
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy nội dung với title này'
      });
    }
    
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching detail',
      error: error.message
    });
  }
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Local: http://localhost:${PORT}`);
  // console.log(`Network: http://172.18.108.239:${PORT}`);
});