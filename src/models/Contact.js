// src/models/Contact.js (MySQL version)
const db = require('../config/db');

const Contact = {
  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM contacts'); // <-- plural
    return rows;
  },
  create: async (data) => {
    const { name, email, message } = data;
    const [result] = await db.execute(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    return result;
  }
};

module.exports = Contact;

