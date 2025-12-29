const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

// GET all contacts
router.get('/', contactController.getContacts);

// POST new contact
router.post('/', contactController.createContact);

module.exports = router; // ✅ MUST export router

