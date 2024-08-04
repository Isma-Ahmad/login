const express = require('express');
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();


router.post('/signup', authController.signUp);


router.post('/login', authController.login);


router.put('/update', authenticateToken, authController.updateUser);

module.exports = router;
