const mysql = require('mysql2');

// create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Root@123",
  database: "chitchat_db"
});

// connect to mysql
db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
    return;
  }
  console.log("✅ MySQL connected successfully");
});

module.exports = db;