const db = require('../config/db');

const Service = {
  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM services');
    return rows;
  },

  create: async (data) => {
    const { title, description, icon } = data;
    const [result] = await db.execute(
      'INSERT INTO services (title, description, icon) VALUES (?, ?, ?)',
      [title, description, icon]
    );
    return result;
  }
};

module.exports = Service;

