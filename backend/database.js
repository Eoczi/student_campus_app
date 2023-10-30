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
    throw error;
  } else {
    console.log("MySQL Database is connected Successfully");
    connection.query("SELECT * FROM ID_TABLE", function (err, results, fields) {
      if (err) {
        throw err;
      }
      console.log(results);
      console.log(fields);
      connection.end();
    });
  }
});

module.exports = connection;
