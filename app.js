const express = require("express");
const app = express();
const router = require("find-my-way")();

router.get("/", (req, res, next) => {
  res.send("ok workkkk");
});

router.get("/test", (req, res, next) => {
  res.send("/test");
});

// router1
const router1 = require("./routes/api.route");
app.use("/api", (req, res, next) => {
  router1.lookup(req, res);
});

// main
app.use((req, res, next) => {
  router.lookup(req, res);
  next();
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server listening on: http://localhost:3000");
});
