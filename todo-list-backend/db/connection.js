const mysql = require('mysql2');

// Menggunakan environment variables untuk koneksi database
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,  // 'todo-list-mysql-service'
  user: process.env.MYSQL_USER,  // 'mysql_username' dari Secret
  password: process.env.MYSQL_PASSWORD,  // 'mysql_password' dari Secret
  database: process.env.MYSQL_DATABASE  // 'todo_list_db'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db;
