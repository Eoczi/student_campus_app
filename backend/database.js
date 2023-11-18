const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
});

connection.connect(function (error) {
  if (error) {
    console.log("Error with database");
    throw error;
  } else {
    console.log("Connection succesful");
  }
});

module.exports = connection;
