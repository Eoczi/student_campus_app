const express = require("express");
const router = express.Router();
const connection = require("../database.js");

router.get("/hobbies", function (req, res) {
  connection.query(
    "SELECT * FROM bli5geofbyhmc9dozgct.Interest GROUP BY hobby;",
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
