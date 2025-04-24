const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect middleware to check for valid JWT token
const protect = async (req, res, next) => {
  let token;
  
  // Check for the token in Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract token from Authorization header
      token = req.headers.authorization.split(' ')[1];
      
      // Verify the token and decode it
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'yourjwtsecret');
      
      // Attach the user data to the request
      req.user = await User.findById(decoded.id).select('-password');
      
      // Proceed to the next middleware or route handler
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // If no token is provided
  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Admin middleware to check if the user is an admin
const admin = (req, res, next) => {
  // Check if the user is an admin
  if (req.user && req.user.isAdmin) {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(401).json({ message: 'Not authorized as admin' });
  }
};

module.exports = { protect, admin };
