const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* Line Chart page */
router.get("/linechart", (req, res, next) => {
  res.render("linechart");
});

module.exports = router;
