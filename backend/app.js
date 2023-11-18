const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const university = require("./routes/university");
const hobby = require("./routes/hobby");
const connection = require("./database");
dotenv.config();

app.use(cors());

app.use("/api", university);
app.use("/api", hobby);

app.listen(process.env.PORT, () => {
  console.log("app is running");
});

process.on("exit", () => {
  connection.end((err) => {
    if (err) {
      console.error("Error closing the database connection:", err);
    } else {
      console.log("Database connection closed.");
    }
  });
});
