import express from "express";
const app = express();
const port = 3000;
import mongoose from "mongoose";
import connectdb from "db.js";
const db_url = process.env.db_url || "mongodb://localhost:27017";

connectdb(db_url);

app.get("/", (req, res) => {
  res.send("This is first hello world program");
});
app.listen(port, () => {
  console.log(`Your server is running at the port http://localhost:${port}`);
});
