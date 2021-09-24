const router = require("find-my-way")();

router.get("/", (req, res, next) => {
  res.send({ message: "/api/root" });
});

router.get("/v1", (req, res, next) => {
  res.send({ message: "v1" });
});

router.get("/v2", async (req, res, next) => {
  res.send({ message: "v2" });
});

module.exports = router;
