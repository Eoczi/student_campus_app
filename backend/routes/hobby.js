const mysql = require("mysql2");
const express = require("express");
const router = express.Router();
const connection = require("../database.js");

router.get("/hobbies", function (req, res) {
  connection.query(
    "SELECT DISTINCT hobby FROM bli5geofbyhmc9dozgct.Interest;",
    (error, results) => {
      if (error) {
        console.error("Error querying the database:", error);
        return res.status(500).json({ error: "Database error" });
      }
      res.json(results);
    }
  );
});

module.exports = router;
