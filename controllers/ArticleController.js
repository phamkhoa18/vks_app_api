// controllers/ArticlesController.js
import mongoose from 'mongoose';
import Article from '../models/Article.js';
import User from '../models/User.js';

const ArticlesController = {
  add: async (req, res) => {
    try {
      const {
        title,
        originalTitle,
        slug,
        description,
        originalUrl,
        content,
        htmlcontent,
        summary,
        aiSummary,
        source,
        author,
        language,
        categories,
        tags,
        image,
        publishDate,
        createdBy,
      } = req.body;

      // Validate createdBy user exists if provided
      if (createdBy && !mongoose.Types.ObjectId.isValid(createdBy)) {
        return res.status(400).json({ message: 'Invalid user ID format for createdBy' });
      }
      if (createdBy) {
        const user = await User.findById(createdBy);
        if (!user) {
          return res.status(400).json({ message: 'User for createdBy not found' });
        }
      }

      // Create new article
      const article = new Article({
        title,
        originalTitle,
        slug,
        description,
        originalUrl,
        content,
        htmlcontent,
        summary,
        aiSummary,
        source,
        author,
        language,
        categories,
        tags,
        image,
        publishDate,
        createdBy,
      });

      await article.save();

      // Populate createdBy (exclude password)
      const populatedArticle = await Article.findById(article._id).populate('createdBy', '-password');
      res.status(201).json(populatedArticle);
    } catch (error) {
      res.status(500).json({ message: 'Error creating article', error: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const articles = await Article.find().populate('createdBy', '-password').sort({ publishDate: -1 });
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching articles', error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid article ID format' });
      }
      const article = await Article.findById(req.params.id).populate('createdBy', '-password');
      if (!article) {
        return res.status(404).json({ message: 'Article not found' });
      }
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching article', error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const {
        title,
        originalTitle,
        slug,
        description,
        originalUrl,
        content,
        htmlcontent,
        summary,
        aiSummary,
        source,
        author,
        language,
        categories,
        tags,
        image,
        publishDate,
        createdBy,
      } = req.body;

      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid article ID format' });
      }

      if (createdBy && !mongoose.Types.ObjectId.isValid(createdBy)) {
        return res.status(400).json({ message: 'Invalid user ID format for createdBy' });
      }
      if (createdBy) {
        const user = await User.findById(createdBy);
        if (!user) {
          return res.status(400).json({ message: 'User for createdBy not found' });
        }
      }

      const updateData = {
        title,
        originalTitle,
        slug,
        description,
        originalUrl,
        content,
        htmlcontent,
        summary,
        aiSummary,
        source,
        author,
        language,
        categories,
        tags,
        image,
        publishDate,
        createdBy,
      };

      const article = await Article.findByIdAndUpdate(req.params.id, updateData, {
        new: true,
        runValidators: true,
      }).populate('createdBy', '-password');

      if (!article) {
        return res.status(404).json({ message: 'Article not found' });
      }

      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ message: 'Error updating article', error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid article ID format' });
      }

      const article = await Article.findByIdAndDelete(req.params.id);
      if (!article) {
        return res.status(404).json({ message: 'Article not found' });
      }
      res.status(200).json({ message: 'Article deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting article', error: error.message });
    }
  }
};

export default ArticlesController;
