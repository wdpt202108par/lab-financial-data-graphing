const router = require("express").Router();

// iteration 1
// axios.<method> will now provide autocomplete and parameter typings
const axios = require('axios').default;


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});



module.exports = router;

