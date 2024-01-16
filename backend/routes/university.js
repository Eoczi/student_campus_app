const express = require("express");
const connection = require("../database");
const router = express.Router();

router.get("/universities", function (req, res) {
  let mean = req.query.mean;
  let hobbies = req.query.hobbies;
  if (!Array.isArray(hobbies)) hobbies = [hobbies];
  console.log(mean, hobbies);
  console.log(req.url);
  const query = `SELECT fac.*, uni.name as university_name, uni.location, uni.link, uni.image
    FROM bli5geofbyhmc9dozgct.Interest as interest 
    JOIN bli5geofbyhmc9dozgct.Faculty as fac on interest.faculty_id_fk = fac.id 
    JOIN bli5geofbyhmc9dozgct.University AS uni ON fac.university_id_fk = uni.id
    WHERE interest.hobby IN (?,?,?) 
    GROUP BY fac.id
    ORDER BY ABS(fac.mean-?);`;
  connection.query(
    query,
    [hobbies[0], hobbies[1], hobbies[2], parseFloat(mean)],
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
