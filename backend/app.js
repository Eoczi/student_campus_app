const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());

/**
 * Backend local server test
 * app.get("/", (req, res) => {
 *  res.send("Hello World!");
 *});
 *
 *app.listen(process.env.PORT, () => {
 *  console.log("app is running");
 *});
 */
