import Category from '../models/Category.js';

const CategoriesController = {
  // Add new category
  add: async (req, res) => {
    try {
      const { name, slug, description } = req.body;

      // Check if name or slug already exists
      const existingCategory = await Category.findOne({ $or: [{ name }, { slug }] });
      if (existingCategory) {
        return res.status(400).json({ message: 'Category name or slug already exists' });
      }

      const category = new Category({
        name,
        slug,
        description
      });

      await category.save();
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: 'Error creating category', error: error.message });
    }
  },

  // Get all categories
  getAll: async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching categories', error: error.message });
    }
  },

  // Get category by ID
  getById: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching category', error: error.message });
    }
  },

  // Update category
  update: async (req, res) => {
    try {
      const { name, slug, description } = req.body;
      const updateData = { name, slug, description };

      // Check if name or slug already exists (excluding current category)
      const existingCategory = await Category.findOne({
        $or: [{ name }, { slug }],
        _id: { $ne: req.params.id }
      });
      if (existingCategory) {
        return res.status(400).json({ message: 'Category name or slug already exists' });
      }

      const category = await Category.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true, runValidators: true }
      );

      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }

      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: 'Error updating category', error: error.message });
    }
  },

  // Delete category
  delete: async (req, res) => {
    try {
      const category = await Category.findByIdAndDelete(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting category', error: error.message });
    }
  }
};

export default CategoriesController;