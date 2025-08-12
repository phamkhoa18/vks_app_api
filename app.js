import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routers/UserRouter.js';
import articleRoutes from './routers/ArticleRouter.js';
import CategoryRouter from './routers/CategoryRouter.js';
import CrawlRouter from './routers/CrawlRouter.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import Utils from './services/Utils.js';


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


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});