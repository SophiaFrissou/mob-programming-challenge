var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const images = ["/assets/img/img1.png","/assets/img/img2.png","/assets/img/img3.jpg" ]
  res.render("index", { title: "test titre", images });
});


router.get("/bar ", (req, res) => {
  //const users = [{name:"hawa", email: "hawa@mail.com", favoriteLangage: "JS"},{name:"Dalila", email: "dalila@mail.com", favoriteLangage: "R"},{name:"Kenwele", email: "kenwele@mail.com", favoriteLangage: "HTML"}]
  res.send("foo");
});

module.exports = router;
