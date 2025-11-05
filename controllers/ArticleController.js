// controllers/ArticlesController.js
import mongoose from 'mongoose';
import Article from '../models/Article.js';
import User from '../models/User.js';
import Category from '../models/Category.js';
import ArticleServices from '../services/ArticleService.js';

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

      // Kiểm tra bài viết đã tồn tại chưa (check duplicate)
      const checkDuplicate = await ArticleServices.isArticleExist({
        title: originalTitle || title,
        url: originalUrl
      });

      if (checkDuplicate) {
        return res.status(409).json({ 
          success: false,
          message: 'Article already exists (duplicate title or URL)',
          error: 'Article with the same title or URL already exists in the database'
        });
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
      // Extract query parameters with default values
      const {
        page = 1,
        limit = 10,
        sort = '-publishDate',
        search,
        language = 'vi',
        categories,
        author,
        source,
        startDate,
        endDate,
        fields
      } = req.query;

      // Build filter object
      const filter = {};

      // Text search across title, content, and summary
      if (search) {
        filter.$or = [
          { title: { $regex: search, $options: 'i' } },
          { originalTitle: { $regex: search, $options: 'i' } },
          { content: { $regex: search, $options: 'i' } },
          { summary: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { author: { $regex: search, $options: 'i' } }
        ];
      }

      // Language filter
      if (language) {
        filter.language = language;
      }

      // Categories filter
      if (categories) {
        filter.categories = categories;
      }

      // Author filter (string field in this model)
      if (author) {
        filter.author = { $regex: author, $options: 'i' };
      }

      // Source filter
      if (source) {
        filter.source = { $regex: source, $options: 'i' };
      }

      // Date range filter
      if (startDate || endDate) {
        filter.publishDate = {};
        if (startDate) {
          filter.publishDate.$gte = new Date(startDate);
        }
        if (endDate) {
          filter.publishDate.$lte = new Date(endDate);
        }
      }

      // Calculate pagination
      const pageNum = Math.max(1, parseInt(page));
      const limitNum = Math.max(1, Math.min(100, parseInt(limit))); // Max 100 items per page
      const skip = (pageNum - 1) * limitNum;

      // Build sort object
      const sortObj = {};
      const sortFields = sort.split(',');
      sortFields.forEach(field => {
        if (field.startsWith('-')) {
          sortObj[field.substring(1)] = -1;
        } else {
          sortObj[field] = 1;
        }
      });

      // Build select fields - exclude heavy content fields by default
      let selectFields = '';
      if (fields) {
        // If user specifically requests fields, use them
        selectFields = fields.split(',').join(' ');
      } else {
        // Default: exclude heavy fields (content, aiSummary, htmlcontent, originalTitle)
        selectFields = '-content -aiSummary -htmlcontent -originalTitle';
      }

      // Execute queries
      const [articles, totalCount] = await Promise.all([
        Article
          .find(filter)
          .select(selectFields)
          .populate('createdBy', 'name email avatar')
          .populate('categories', 'name slug')
          .sort(sortObj)
          .skip(skip)
          .limit(limitNum)
          .lean(), // Use lean() for better performance
        Article.countDocuments(filter)
      ]);

      // Calculate pagination info
      const totalPages = Math.ceil(totalCount / limitNum);
      const hasNextPage = pageNum < totalPages;
      const hasPrevPage = pageNum > 1;

      // Response
      res.status(200).json({
        success: true,
        data: articles,
        pagination: {
          currentPage: pageNum,
          totalPages,
          totalCount,
          limit: limitNum,
          hasNextPage,
          hasPrevPage,
          nextPage: hasNextPage ? pageNum + 1 : null,
          prevPage: hasPrevPage ? pageNum - 1 : null
        },
        filters: {
          search: search || null,
          language: language || null,
          categories: categories || null,
          author: author || null,
          source: source || null,
          dateRange: {
            startDate: startDate || null,
            endDate: endDate || null
          }
        }
      });

    } catch (error) {
      console.error('Error in getAll articles:', error);
      
      // Handle specific MongoDB errors
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Invalid ID format',
          error: error.message
        });
      }

      res.status(500).json({
        success: false,
        message: 'Error fetching articles',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      });
    }
  },

  // Optional: Add middleware for query validation
  validateGetAllQuery: async (req, res, next) => {
    const { page, limit, sort } = req.query;
    
    // Validate page
    if (page && (!Number.isInteger(Number(page)) || Number(page) < 1)) {
      return res.status(400).json({
        success: false,
        message: 'Page must be a positive integer'
      });
    }
    
    // Validate limit
    if (limit && (!Number.isInteger(Number(limit)) || Number(limit) < 1 || Number(limit) > 100)) {
      return res.status(400).json({
        success: false,
        message: 'Limit must be between 1 and 100'
      });
    }
    
    // Validate sort fields
    if (sort) {
      const allowedSortFields = ['publishDate', 'createdAt', 'title', 'author', 'language'];
      const sortFields = sort.split(',');
      const invalidFields = sortFields.filter(field => {
        const fieldName = field.startsWith('-') ? field.substring(1) : field;
        return !allowedSortFields.includes(fieldName);
      });
      
      if (invalidFields.length > 0) {
        return res.status(400).json({
          success: false,
          message: `Invalid sort fields: ${invalidFields.join(', ')}`
        });
      }
    }
    
    next();
  },

  getById: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ 
          success: false,
          message: 'Invalid article ID format' 
        });
      }
      
      // getById returns ALL fields including content, htmlcontent, etc.
      const article = await Article.findById(req.params.id)
        .populate('categories', 'name slug')
        .populate('createdBy', 'name email avatar');
        
      if (!article) {
        return res.status(404).json({ 
          success: false,
          message: 'Article not found' 
        });
      }
      
      res.status(200).json({
        success: true,
        data: article
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: 'Error fetching article', 
        error: error.message 
      });
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
  },

  search: async (req, res) => {
    try {
      // Extract query parameters with default values
      const {
        page = 1,
        limit = 20,
        sort = '-createdAt',
        q, // General search query
        title, // Search in title only
        author, // Search in author only
        category, // Category name or ID
        language = 'vi',
        source,
        startDate,
        endDate,
        fields
      } = req.query;

      console.log('🔍 Search params received:', req.query);

      // Build filter object
      const filter = {};

      // Language filter (always apply)
      if (language) {
        filter.language = language;
      }

      // ✅ Handle category search (by name or ID)
      if (category) {
        try {
          // First, try to find category by name (case insensitive)
          const categoryDoc = await Category.findOne({ 
            name: { $regex: new RegExp(`^${category}$`, 'i') } 
          });
          
          if (categoryDoc) {
            // Found category by name, use its ID
            filter.categories = categoryDoc._id;
            console.log('📂 Category found by name:', categoryDoc.name, 'ID:', categoryDoc._id);
          } else if (mongoose.Types.ObjectId.isValid(category)) {
            // If not found by name but is valid ObjectId, use as ID
            filter.categories = category;
            console.log('📂 Using category as ID:', category);
          } else {
            // Category not found
            console.log('❌ Category not found:', category);
            return res.status(400).json({
              success: false,
              message: `Category "${category}" not found`
            });
          }
        } catch (categoryError) {
          console.error('❌ Category search error:', categoryError);
          return res.status(400).json({
            success: false,
            message: 'Error searching for category'
          });
        }
      }

      // ✅ Handle different search types
      if (q) {
        // General search - search across multiple fields
        filter.$or = [
          { title: { $regex: q, $options: 'i' } },
          { originalTitle: { $regex: q, $options: 'i' } },
          { content: { $regex: q, $options: 'i' } },
          { summary: { $regex: q, $options: 'i' } },
          { description: { $regex: q, $options: 'i' } },
          { author: { $regex: q, $options: 'i' } }
        ];
      } else if (title) {
        // Search in title only
        filter.title = { $regex: title, $options: 'i' };
      } else if (author) {
        // Search in author only
        filter.author = { $regex: author, $options: 'i' };
      }

      // Source filter
      if (source) {
        filter.source = { $regex: source, $options: 'i' };
      }

      // Date range filter
      if (startDate || endDate) {
        filter.publishDate = {};
        if (startDate) {
          filter.publishDate.$gte = new Date(startDate);
        }
        if (endDate) {
          filter.publishDate.$lte = new Date(endDate);
        }
      }

      console.log('🔍 Final filter:', JSON.stringify(filter, null, 2));

      // Calculate pagination
      const pageNum = Math.max(1, parseInt(page));
      const limitNum = Math.max(1, Math.min(100, parseInt(limit)));
      const skip = (pageNum - 1) * limitNum;

      // Build sort object
      const sortObj = {};
      const sortFields = sort.split(',');
      sortFields.forEach(field => {
        if (field.startsWith('-')) {
          sortObj[field.substring(1)] = -1;
        } else {
          sortObj[field] = 1;
        }
      });

      // Build select fields - exclude heavy content fields by default
      let selectFields = '';
      if (fields) {
        selectFields = fields.split(',').join(' ');
      } else {
        selectFields = '-content -aiSummary -htmlcontent -originalTitle';
      }

      // Execute queries
      const [articles, totalCount] = await Promise.all([
        Article
          .find(filter)
          .select(selectFields)
          .populate('createdBy', 'name email avatar')
          .populate('categories', 'name slug')
          .sort(sortObj)
          .skip(skip)
          .limit(limitNum)
          .lean(),
        Article.countDocuments(filter)
      ]);

      // Calculate pagination info
      const totalPages = Math.ceil(totalCount / limitNum);
      const hasNextPage = pageNum < totalPages;
      const hasPrevPage = pageNum > 1;

      console.log(`✅ Search completed: ${articles.length} articles found (${totalCount} total)`);

      // Response
      res.status(200).json({
        success: true,
        data: articles,
        pagination: {
          page: pageNum,
          totalPages,
          totalCount,
          limit: limitNum,
          hasNextPage,
          hasPrevPage,
          nextPage: hasNextPage ? pageNum + 1 : null,
          prevPage: hasPrevPage ? pageNum - 1 : null
        },
        filters: {
          q: q || null,
          title: title || null,
          author: author || null,
          category: category || null,
          language: language || null,
          source: source || null,
          dateRange: {
            startDate: startDate || null,
            endDate: endDate || null
          }
        }
      });

    } catch (error) {
      console.error('❌ Error in search articles:', error);
      
      // Handle specific MongoDB errors
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Invalid ID format',
          error: error.message
        });
      }

      res.status(500).json({
        success: false,
        message: 'Error searching articles',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      });
    }
  },

  // ✅ NEW: Get search suggestions
  getSuggestions: async (req, res) => {
    try {
      const { q, limit = 5 } = req.query;

      if (!q || q.length < 2) {
        return res.status(400).json({
          success: false,
          message: 'Query must be at least 2 characters long'
        });
      }

      // Search for article titles that match the query
      const suggestions = await Article
        .find({
          title: { $regex: q, $options: 'i' },
          language: 'vi'
        })
        .select('title')
        .limit(parseInt(limit))
        .lean();

      // Extract unique titles
      const uniqueTitles = [...new Set(suggestions.map(article => article.title))];

      res.status(200).json({
        success: true,
        data: uniqueTitles.slice(0, parseInt(limit))
      });

    } catch (error) {
      console.error('❌ Error getting suggestions:', error);
      res.status(500).json({
        success: false,
        message: 'Error getting suggestions',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      });
    }
  },
  
};

export default ArticlesController;