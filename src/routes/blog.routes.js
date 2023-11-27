const express = require('express');
const router = require('./auth.routes');
const blogController = require('../controllers/blog.controllers');
// POST: locahost:5000/v1/blog/post
router.post('/post', blogController.createBlog)

module.exports = router