const express = require("express");
const connection = require("../database");
const router = express.Router();

router.get("/universities", function (req, res) {
  const selectedHobbies = req.query;
  let mean = req.query.mean;
  let hobbies = req.query.hobbies;
  if (!Array.isArray(hobbies)) hobbies = [hobbies];
  console.log(mean, hobbies);
  console.log(req.url);
  const query =
    "SELECT * FROM bli5geofbyhmc9dozgct.Interest JOIN bli5geofbyhmc9dozgct.Faculty on bli5geofbyhmc9dozgct.Interest.faculty_id_fk = bli5geofbyhmc9dozgct.Faculty.id WHERE bli5geofbyhmc9dozgct.Interest.hobby IN (?,?,?);";
  connection.query(
    query,
    [hobbies[0], hobbies[1], hobbies[2]],
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
