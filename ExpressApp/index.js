const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log(`Listening on port: 3000`);
});

app.get("/", (req, res) => {
  res.send("Users shown");
});

app.get("/delete", (req, res) => {
  res.send("Delete user");
});

app.get("/update", (req, res) => {
  res.send("Update User");
});
app.get("/insert", (req, res) => {
  res.send("Insert User");
});
