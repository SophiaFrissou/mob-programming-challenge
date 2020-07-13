var express = require('express');
var router = new express.Router();

console.log("hello users");

/* GET users listing. */


router.get("/allUsers ", (req, res) => {
  const users = [{name:"hawa", email: "hawa@mail.com", favoriteLangage: "JS"},{name:"Dalila", email: "dalila@mail.com", favoriteLangage: "R"},{name:"Kenwele", email: "kenwele@mail.com", favoriteLangage: "HTML"}]
  res.render("allUsers", {users});
});


router.get("/add-simploniens", (req, res) => {
  res.render("formUser");
});

router.get("/api/simploniens", (req, res) => {
  res.json("foo bar baz");
});

module.exports = router;
