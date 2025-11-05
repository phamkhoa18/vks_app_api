// controllers/SectionsController.js
import mongoose from 'mongoose';
import Section from '../models/Section.js';
import Topic from '../models/Topic.js';
import Utils from '../services/Utils.js';
import { createSectionWithTopics } from '../services/SectionServices.js';
const SectionsController = {
  // Tạo section với topics từ articles + summary tổng hợp
  generateSection: async (req, res) => {
    try {
      const { limit = 15 } = req.body;
      
      console.log(`🚀 API: Tạo section từ ${limit} bài viết...`);
      
      // Gọi Utils để tạo section với topics (tối đa 6 topics) + summary
      const section = await Utils.processArticlesToTopics(parseInt(limit));
      
      if (!section) {
        return res.status(404).json({
          success: false,
          message: 'Không tìm thấy bài viết nào để tạo section'
        });
      }
      
      res.status(201).json({
        success: true,
        message: `Đã tạo section thành công với ${section.topics.length} topics và summary tổng hợp`,
        data: section,
        meta: {
          totalTopics: section.topics.length,
          processedArticles: limit,
          sectionTime: section.sectionTime,
          hasSummary: !!section.summary,
          summaryLength: section.summary ? section.summary.length : 0
        }
      });
      
    } catch (error) {
      console.error('❌ Lỗi API generateSection:', error);
      res.status(500).json({
        success: false,
        message: 'Error generating section',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      });
    }
  },

  // Lấy sections với pagination đơn giản (bao gồm summary)
  getAll: async (req, res) => {
    try {
      const {
        page = 1,
        limit = 1
      } = req.query;

      const pageNum = Math.max(1, parseInt(page));
      const limitNum = Math.max(1, Math.min(10, parseInt(limit)));
      const skip = (pageNum - 1) * limitNum;

      console.log(`📖 Lấy sections - Page: ${pageNum}, Limit: ${limitNum}, Skip: ${skip}`);

      // Execute queries - Luôn populate topics và articles, bao gồm summary
      const [sections, totalCount] = await Promise.all([
        Section.find({ isActive: true })
          .select('title slug description summary topics sectionTime createdAt isActive') // Thêm summary vào select
          .populate({
            path: 'topics',
            populate: {
              path: 'articles',
              select: 'title description summary author image' ,
              populate: {
                path: 'categories',
                select: 'name slug'
              },
              options: { 
                sort: { publishDate: -1 },
                limit: 10
              }
            }
          })
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limitNum)
          .lean(),
        Section.countDocuments({ isActive: true })
      ]);

      // Calculate pagination info
      const totalPages = Math.ceil(totalCount / limitNum);
      const hasNextPage = pageNum < totalPages;
      const hasPrevPage = pageNum > 1;

      console.log(`✅ Trả về ${sections.length} sections với summary`);

      res.status(200).json({
        success: true,
        data: sections,
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
        meta: {
          skip: skip,
          timestamp: new Date().toISOString(),
          sectionsWithSummary: sections.filter(s => s.summary && s.summary.length > 0).length
        }
      });

    } catch (error) {
      console.error('Error in getAll sections:', error);
      
      res.status(500).json({
        success: false,
        message: 'Error fetching sections',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      });
    }
  },

  // Lấy section theo ID với tất cả topics và articles (bao gồm summary)
  getById: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ 
          success: false,
          message: 'Invalid section ID format' 
        });
      }
      
      const section = await Section.findById(req.params.id)
        .populate({
          path: 'topics',
          populate: {
            path: 'articles',
            select: 'title slug content summary publishDate image author source categories',
            populate: {
              path: 'categories',
              select: 'name slug'
            }
          }
        });
        
      if (!section) {
        return res.status(404).json({ 
          success: false,
          message: 'Section not found' 
        });
      }
      
      // Thống kê section (bao gồm summary stats)
      const stats = {
        totalTopics: section.topics.length,
        totalArticles: section.topics.reduce((sum, topic) => sum + topic.articles.length, 0),
        sectionAge: Math.floor((Date.now() - section.createdAt) / (1000 * 60 * 60)), // hours
        hasSummary: !!section.summary,
        summaryLength: section.summary ? section.summary.length : 0,
        summaryWordCount: section.summary ? section.summary.split(' ').length : 0
      };
      
      res.status(200).json({
        success: true,
        data: section,
        stats: stats
      });
      
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: 'Error fetching section', 
        error: error.message 
      });
    }
  },

  // Lấy section theo slug (bao gồm summary)
  getBySlug: async (req, res) => {
    try {
      const { slug } = req.params;
      
      const section = await Section.findOne({ slug: slug, isActive: true })
        .populate({
          path: 'topics',
          populate: {
            path: 'articles',
            select: 'title slug content summary publishDate image author source',
            options: { sort: { publishDate: -1 } }
          }
        });
        
      if (!section) {
        return res.status(404).json({ 
          success: false,
          message: 'Section not found' 
        });
      }
      
      res.status(200).json({
        success: true,
        data: section
      });
      
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: 'Error fetching section by slug', 
        error: error.message 
      });
    }
  },

  // Tạo section thủ công (có thể thêm summary)
  add: async (req, res) => {
    try {
      const { title, description, summary, topics = [] } = req.body;

      if (!title) {
        return res.status(400).json({
          success: false,
          message: 'Title is required'
        });
      }

      // Validate topic IDs
      if (topics.length > 0) {
        const invalidIds = topics.filter(id => !mongoose.Types.ObjectId.isValid(id));
        if (invalidIds.length > 0) {
          return res.status(400).json({
            success: false,
            message: 'Invalid topic ID format',
            invalidIds
          });
        }

        // Check if topics exist
        const existingTopics = await Topic.find({ _id: { $in: topics } });
        if (existingTopics.length !== topics.length) {
          return res.status(400).json({
            success: false,
            message: 'Some topics not found'
          });
        }
      }

      // Create section với summary
      const section = new Section({
        title,
        slug: Utils.generateSlug(title),
        description: description || `Section với ${topics.length} chủ đề`,
        summary: summary || '', // Thêm summary
        topics,
        sectionTime: new Date()
      });

      await section.save();

      // Update topics với section ID
      if (topics.length > 0) {
        await Topic.updateMany(
          { _id: { $in: topics } },
          { section: section._id }
        );
      }

      // Populate topics
      const populatedSection = await Section.findById(section._id)
        .populate({
          path: 'topics',
          select: 'title slug',
          populate: {
            path: 'articles',
            select: 'title slug publishDate image summary',
            options: { limit: 3 }
          }
        });

      res.status(201).json({
        success: true,
        data: populatedSection
      });

    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({
          success: false,
          message: 'Section with this slug already exists'
        });
      }

      res.status(500).json({
        success: false,
        message: 'Error creating section',
        error: error.message
      });
    }
  },

  // Cập nhật section (bao gồm summary)
  update: async (req, res) => {
    try {
      const { title, description, summary, topics, isActive } = req.body;

      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid section ID format'
        });
      }

      // Validate topic IDs if provided
      if (topics && topics.length > 0) {
        const invalidIds = topics.filter(id => !mongoose.Types.ObjectId.isValid(id));
        if (invalidIds.length > 0) {
          return res.status(400).json({
            success: false,
            message: 'Invalid topic ID format',
            invalidIds
          });
        }

        const existingTopics = await Topic.find({ _id: { $in: topics } });
        if (existingTopics.length !== topics.length) {
          return res.status(400).json({
            success: false,
            message: 'Some topics not found'
          });
        }
      }

      const updateData = {};
      if (title) {
        updateData.title = title;
        updateData.slug = Utils.generateSlug(title);
      }
      if (description !== undefined) updateData.description = description;
      if (summary !== undefined) updateData.summary = summary; // Thêm summary update
      if (topics !== undefined) updateData.topics = topics;
      if (isActive !== undefined) updateData.isActive = isActive;

      const section = await Section.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true, runValidators: true }
      ).populate({
        path: 'topics',
        select: 'title slug',
        populate: {
          path: 'articles',
          select: 'title slug publishDate image summary',
          options: { limit: 3 }
        }
      });

      if (!section) {
        return res.status(404).json({
          success: false,
          message: 'Section not found'
        });
      }

      // Update topics với section ID mới
      if (topics !== undefined) {
        // Remove old section reference
        await Topic.updateMany(
          { section: req.params.id },
          { $unset: { section: 1 } }
        );
        
        // Add new section reference
        if (topics.length > 0) {
          await Topic.updateMany(
            { _id: { $in: topics } },
            { section: req.params.id }
          );
        }
      }

      res.status(200).json({
        success: true,
        data: section
      });

    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({
          success: false,
          message: 'Section with this slug already exists'
        });
      }

      res.status(500).json({
        success: false,
        message: 'Error updating section',
        error: error.message
      });
    }
  },

  // NEW: Generate summary cho section hiện có
  generateSummary: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid section ID format'
        });
      }

      // Lấy section với tất cả articles
      const section = await Section.findById(req.params.id)
        .populate({
          path: 'topics',
          populate: {
            path: 'articles',
            select: 'title summary content'
          }
        });

      if (!section) {
        return res.status(404).json({
          success: false,
          message: 'Section not found'
        });
      }

      // Lấy tất cả articles từ topics
      const allArticles = [];
      section.topics.forEach(topic => {
        allArticles.push(...topic.articles);
      });

      if (allArticles.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'No articles found in this section to generate summary'
        });
      }

      console.log(`📝 Generating summary for section "${section.title}" with ${allArticles.length} articles`);

      // Tạo summary
      const summary = await Utils.generateSectionSummary(allArticles);

      // Cập nhật section với summary mới
      section.summary = summary;
      await section.save();

      res.status(200).json({
        success: true,
        message: 'Summary generated successfully',
        data: {
          sectionId: section._id,
          title: section.title,
          summary: summary,
          summaryLength: summary.length,
          articlesProcessed: allArticles.length
        }
      });

    } catch (error) {
      console.error('❌ Error generating summary:', error);
      res.status(500).json({
        success: false,
        message: 'Error generating summary',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      });
    }
  },

  // NEW: Lấy chỉ summary của section (dành cho audio/reading)
  getSummaryOnly: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid section ID format'
        });
      }

      const section = await Section.findById(req.params.id)
        .select('title summary sectionTime')
        .lean();

      if (!section) {
        return res.status(404).json({
          success: false,
          message: 'Section not found'
        });
      }

      if (!section.summary || section.summary.trim().length === 0) {
        return res.status(404).json({
          success: false,
          message: 'No summary available for this section'
        });
      }

      res.status(200).json({
        success: true,
        data: {
          title: section.title,
          summary: section.summary,
          sectionTime: section.sectionTime,
          summaryStats: {
            length: section.summary.length,
            wordCount: section.summary.split(' ').length,
            estimatedReadTime: Math.ceil(section.summary.split(' ').length / 200) // 200 words per minute
          }
        }
      });

    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching summary',
        error: error.message
      });
    }
  },

  // Thêm topics vào section
  addTopics: async (req, res) => {
    try {
      const { topics } = req.body;

      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid section ID format'
        });
      }

      if (!topics || !Array.isArray(topics) || topics.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Topics array is required'
        });
      }

      // Validate topic IDs
      const invalidIds = topics.filter(id => !mongoose.Types.ObjectId.isValid(id));
      if (invalidIds.length > 0) {
        return res.status(400).json({
          success: false,
          message: 'Invalid topic ID format',
          invalidIds
        });
      }

      const section = await Section.findById(req.params.id);
      if (!section) {
        return res.status(404).json({
          success: false,
          message: 'Section not found'
        });
      }

      // Add unique topics
      const currentTopics = section.topics.map(id => id.toString());
      const newTopics = topics.filter(id => !currentTopics.includes(id));
      
      section.topics.push(...newTopics);
      await section.save();

      // Update topics với section ID
      await Topic.updateMany(
        { _id: { $in: newTopics } },
        { section: section._id }
      );

      // Populate and return
      const updatedSection = await Section.findById(section._id)
        .populate({
          path: 'topics',
          select: 'title slug',
          populate: {
            path: 'articles',
            select: 'title slug publishDate image summary',
            options: { limit: 3 }
          }
        });

      res.status(200).json({
        success: true,
        data: updatedSection,
        meta: {
          addedTopics: newTopics.length,
          totalTopics: section.topics.length
        }
      });

    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error adding topics to section',
        error: error.message
      });
    }
  },

  // Xóa section
  delete: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid section ID format'
        });
      }

      const section = await Section.findById(req.params.id);
      if (!section) {
        return res.status(404).json({
          success: false,
          message: 'Section not found'
        });
      }

      // Remove section reference from topics
      await Topic.updateMany(
        { section: req.params.id },
        { $unset: { section: 1 } }
      );

      // Delete section
      await Section.findByIdAndDelete(req.params.id);

      res.status(200).json({
        success: true,
        message: 'Section deleted successfully',
        meta: {
          removedTopicsCount: section.topics.length
        }
      });

    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error deleting section',
        error: error.message
      });
    }
  },

  // Validation middleware
  validateGenerateSection: async (req, res, next) => {
    const { limit } = req.body;
    
    if (limit && (!Number.isInteger(Number(limit)) || Number(limit) < 1 || Number(limit) > 50)) {
      return res.status(400).json({
        success: false,
        message: 'Limit must be between 1 and 50'
      });
    }
    
    next();
  },

  generateDailySection: async (req, res) => {
    try {
      const newSection = await createSectionWithTopics();
      res.status(201).json({
        message: 'Section created successfully with selected articles',
        section: newSection,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating section', error: error.message });
    }
  }
};

export default SectionsController;
