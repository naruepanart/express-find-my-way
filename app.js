/*const express = require("express");
const app = express();
const router = require("find-my-way")();

router.get("/", (req, res, next) => {
  console.log("/");
  res.send("ok");
});

router.get("/test", (req, res, next) => {
  console.log("/test");
  res.send("/test");
});

// router1
const router1 = require("./routes/api.route");
app.use("/api", (req, res, next) => {
  console.log("/api");
  router1.lookup(req, res);
});

// main
app.use((req, res, next) => {
  console.log("main");
  router.lookup(req, res);
  next();
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server listening on: http://localhost:3000");
});*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Works !!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
