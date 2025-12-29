const db = require('../config/db');

// GET all services
exports.getServices = async (req, res) => {
  try {
    const [services] = await db.query('SELECT * FROM Services');
    res.render('pages/services', { services, title: 'Our Services' });
  } catch (err) {
    console.error('DB Error:', err.message);
    res.status(500).send('Database error');
  }
};

// POST a new service (optional)
exports.createService = async (req, res) => {
  const { title, description, icon } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO Services (title, description, icon) VALUES (?, ?, ?)',
      [title, description, icon]
    );
    res.json({ success: true, id: result.insertId });
  } catch (err) {
    console.error('DB Error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

