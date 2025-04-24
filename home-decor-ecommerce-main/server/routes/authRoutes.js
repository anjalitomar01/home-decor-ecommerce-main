const express = require('express');
const router = express.Router();

// Destructuring controller methods
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require('../controllers/authController');

// Destructuring middlewares for protection and admin check
const { protect, admin } = require('../middleware/auth');

// Public Routes
router.post('/login', authUser); // Login route for user authentication
router.post('/register', registerUser); // Register route to create new user

// Protected Routes for Logged-in Users
router
  .route('/profile')
  .get(protect, getUserProfile) // Get user profile (only for authenticated users)
  .put(protect, updateUserProfile); // Update user profile (only for authenticated users)

// Admin Only Routes
router
  .route('/')
  .get(protect, admin, getUsers); // Get all users (only for admin)

router
  .route('/:id')
  .delete(protect, admin, deleteUser) // Delete a user (only for admin)
  .get(protect, admin, getUserById) // Get user by ID (only for admin)
  .put(protect, admin, updateUser); // Update user details (only for admin)

module.exports = router;
