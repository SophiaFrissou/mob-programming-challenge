var express = require('express');
var router = express.Router();
var images = require

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('/'+ '/images');
});


router.get("/all-simploniens ", (req, res) => {
  res.render("allUsers" + "/users");
});


router.get("/add-simploniens", (req, res) => {
  res.render("formUser");
});

router.get("/api/simploniens", (req, res) => {
  res.render("about");
});
module.exports = router;
