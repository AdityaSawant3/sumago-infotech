const db = require('../config/db');

const Contact = {
  create: async (data) => {
    const { name, email, message } = data;
    const [result] = await db.execute(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    return result;
  },

  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM contacts');
    return rows;
  }
};

module.exports = Contact;

