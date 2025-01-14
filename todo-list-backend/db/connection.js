const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'todo-list-mysql-service',  // Nama service MySQL di Kubernetes
    user: process.env.DB_USER,        // Gunakan user dari environment variable
    password: process.env.DB_PASSWORD, // Gunakan password dari environment variable
    database: process.env.DB_NAME     // Nama database dari environment variable
});

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected');
});

module.exports = db;
