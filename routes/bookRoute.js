
const express = require('express')
const router = express.Router();
const asyncHandler = require("express-async-handler")
const { createBook
        } = require('../Controllers/bookController');

//create new book
router.post('/createBook/:id' ,  createBook);


module.exports = router ;