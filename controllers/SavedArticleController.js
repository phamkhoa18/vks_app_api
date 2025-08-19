import SavedArticle from '../models/SavedArticle.js'

const SavedArticlesController = {
  // Save an article for a user
  save: async (req, res) => {
    try {
      const { userId, articleId } = req.body;

      // Check if article is already saved by this user
      const existingSavedArticle = await SavedArticle.findOne({ 
        userId, 
        articleId 
      });
      
      if (existingSavedArticle) {
        return res.status(400).json({ message: 'Article already saved by this user' });
      }

      const savedArticle = new SavedArticle({
        userId,
        articleId
      });

      await savedArticle.save();
      
      // Populate to return full data
      const populatedSavedArticle = await SavedArticle.findById(savedArticle._id)
        .populate('userId', 'name email')
        .populate('articleId', 'title content author');
        
      res.status(201).json(populatedSavedArticle);
    } catch (error) {
      res.status(500).json({ message: 'Error saving article', error: error.message });
    }
  },

  // Get all saved articles
  getAll: async (req, res) => {
    try {
      const savedArticles = await SavedArticle.find()
        .populate('userId', 'name email')
        .populate('articleId', 'title content author')
        .sort({ savedAt: -1 });
        
      res.status(200).json(savedArticles);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching saved articles', error: error.message });
    }
  },

  // Get saved articles by user ID
  getByUserId: async (req, res) => {
    try {
      const { userId } = req.params;
      
      const savedArticles = await SavedArticle.find({ userId })
        .populate('articleId', 'title content author image createdAt publishDate')
        .sort({ savedAt: -1 });
        
      res.status(200).json(savedArticles);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user saved articles', error: error.message });
    }
  },

  // Get saved article by ID
  getById: async (req, res) => {
    try {
      const savedArticle = await SavedArticle.findById(req.params.id)
        .populate('userId', 'name email')
        .populate('articleId', 'title content author');
        
      if (!savedArticle) {
        return res.status(404).json({ message: 'Saved article not found' });
      }
      
      res.status(200).json(savedArticle);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching saved article', error: error.message });
    }
  },

  // Check if article is saved by user
  checkSaved: async (req, res) => {
    try {
      const { userId, articleId } = req.params;
      console.log(userId, articleId);
      
      
      const savedArticle = await SavedArticle.findOne({ userId, articleId });
      
      res.status(200).json({ 
        isSaved: !!savedArticle,
        savedArticle: savedArticle || null
      });
    } catch (error) {
      res.status(500).json({ message: 'Error checking saved status', error: error.message });
    }
  },

  // Remove saved article
  remove: async (req, res) => {
    try {
      const savedArticle = await SavedArticle.findByIdAndDelete(req.params.id);
      
      if (!savedArticle) {
        return res.status(404).json({ message: 'Saved article not found' });
      }
      
      res.status(200).json({ message: 'Article removed from saved list successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error removing saved article', error: error.message });
    }
  },

  // Remove saved article by userId and articleId
  removeByUserAndArticle: async (req, res) => {
    try {
      const { userId, articleId } = req.params;
      
      const savedArticle = await SavedArticle.findOneAndDelete({ 
        userId, 
        articleId 
      });
      
      if (!savedArticle) {
        return res.status(404).json({ message: 'Saved article not found' });
      }
      
      res.status(200).json({ message: 'Article removed from saved list successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error removing saved article', error: error.message });
    }
  },

  // Get count of saved articles by user
  getCountByUser: async (req, res) => {
    try {
      const { userId } = req.params;
      
      const count = await SavedArticle.countDocuments({ userId });
      
      res.status(200).json({ count });
    } catch (error) {
      res.status(500).json({ message: 'Error counting saved articles', error: error.message });
    }
  }
};

export default SavedArticlesController;