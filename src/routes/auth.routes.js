const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controllers');
// POST : loacalhost:5000/v1/auth/register
router.post('/register', authController.register)

module.exports = router;