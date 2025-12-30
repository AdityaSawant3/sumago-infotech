const express = require('express');
const path = require('path');
const db = require('./config/db');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Health check (ADD THIS)
app.get('/health', (req, res) => {
  res.status(200).send('healthy');
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', require('./routes/index.routes'));
app.use('/services', require('./routes/service.routes'));
app.use('/contact', require('./routes/contact.routes'));

module.exports = app;

