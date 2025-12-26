const Service = require('../models/Service');

exports.getServices = async (req, res) => {
  try {
    const services = await Service.getAll(); // <-- use getAll() for MySQL
    res.render('pages/services', { services });
  } catch (err) {
    console.error('DB Error:', err.message);
    res.status(500).send('Database error');
  }
};

exports.createService = async (req, res) => {
  try {
    const service = await Service.create(req.body); // optional create endpoint
    res.json(service);
  } catch (err) {
    console.error('DB Error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

