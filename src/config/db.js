const mysql = require('mysql2/promise');

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('✅ MySQL Connected');
    return connection;
  } catch (err) {
    console.error('❌ DB Error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

