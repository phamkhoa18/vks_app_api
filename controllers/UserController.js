import User from "../models/User.js";
import bcrypt from 'bcryptjs';

const UsersController = {
  // Add new user
  add: async (req, res) => {
    try {
      const { email, password, name, avatar, role } = req.body;

      // Check if email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        email,
        password: hashedPassword,
        name,
        avatar,
        role
      });

      await user.save();
      // Return user without password
      const { password: _, ...userWithoutPassword } = user.toObject();
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error: error.message });
    }
  },

  // Login user
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Return user without password
      const { password: _, ...userWithoutPassword } = user.toObject();
      res.status(200).json({ message: 'Login successful', user: userWithoutPassword });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error: error.message });
    }
  },

  // Get all users
  getAll: async (req, res) => {
    try {
      const users = await User.find().select('-password');
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
  },

  // Get user by ID
  getById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
  },

  // Update user
  update: async (req, res) => {
    try {
      const { email, name, avatar, role, password } = req.body;
      const updateData = { email, name, avatar, role };

      // If password is provided, hash it
      if (password) {
        updateData.password = await bcrypt.hash(password, 10);
      }

      const user = await User.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true, runValidators: true }
      ).select('-password');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error updating user', error: error.message });
    }
  },

  // Delete user
  delete: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
  }
};

export default UsersController;
