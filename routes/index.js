const router = require("express").Router();

// iteration 1
// axios.<method> will now provide autocomplete and parameter typings
const axios = require('axios').default;


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* Iteration 1 : GET the data - Axois request URL */
axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json`)
.then(response => {
  console.log('Response from API is: ', response);
})
.catch(err=> {
  console.log('Error! Axios get failed error');
})

module.exports = router;

