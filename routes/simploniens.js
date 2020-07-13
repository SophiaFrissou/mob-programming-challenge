var express = require('express');
var router = express.Router();


/* GET users listing. */


router.get("/all-simploniens ", (req, res) => {
  res.render("allUsers");
});


router.get("/add-simploniens", (req, res) => {
  res.render("formUser");
});

router.get("/api/simploniens", (req, res) => {
  res.json("foo bar baz");
});
module.exports = router;
