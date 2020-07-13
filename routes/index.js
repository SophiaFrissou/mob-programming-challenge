var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const images = ["/assets/img/img1.png","/assets/img/img2.png","/assets/img/img3.jpg" ]
  res.render("index", { title: "test titre", images });
});


module.exports = router;
