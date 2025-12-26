const express = require('express');
const router = express.Router();
const pageController = require('../controllers/page.controller');

router.get('/', pageController.home);
router.get('/about', pageController.about);
router.get('/careers', pageController.careers);

module.exports = router;

