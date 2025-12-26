const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

// GET request to show contacts
router.get('/', contactController.getContacts);

// If you have a POST request to save new contact
router.post('/', contactController.createContact); // make sure createContact exists

module.exports = router;

