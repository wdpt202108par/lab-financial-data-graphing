const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/error", (req, res, next) => {
  res.render("error");
});

router.get("/not-found", (req, res, next) => {
  res.render("not-found");
});

module.exports = router;

