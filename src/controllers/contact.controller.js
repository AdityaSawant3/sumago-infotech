const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  await Contact.create(req.body);
  res.redirect('/');
};


