const db = require('../config/db');

// GET all contacts (render web page)
exports.getContacts = async (req, res) => {
  try {
    const [contacts] = await db.query('SELECT * FROM Contacts');
    // change template to singular 'contact'
    res.render('pages/contact', { contacts, title: 'Contact' });
  } catch (err) {
    console.error('DB Error:', err.message);
    res.status(500).send('Database error');
  }
};

// POST a new contact
exports.createContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO Contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    res.redirect('/contact'); // redirect to singular route
  } catch (err) {
    console.error('DB Error:', err.message);
    res.status(500).send('Database error');
  }
};

