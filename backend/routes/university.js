const mysql = require("mysql2");
const express = require("express");
const connection = require("../database");
const router = express.Router();

//route that reads all universities and shows everything in a console/json
router.get("/universities", function (req, res) {
  connection.query(
    "SELECT * FROM bli5geofbyhmc9dozgct.University;",
    (error, results) => {
      if (error) {
        console.error("Error querying the database:", error);
        return res.status(500).json({ error: "Database error" });
      }
      console.log(results);
      res.json(results);
    }
  );
});

module.exports = router;
