var express = require('express');
var router = new express.Router();
const userModel = require("./../models/user");
console.log("hello users");

/* GET users listing. */
const users = [{
  name: "hawa",
  email: "hawa@mail.com",
  favoriteLangage: "JS"
}, {
  name: "Dalila",
  email: "dalila@mail.com",
  favoriteLangage: "R"
}, {
  name: "Kenwele",
  email: "kenwele@mail.com",
  favoriteLangage: "HTML"
}];


router.get("/all-simploniens", (req, res, next) => {
  userModel
  .find()
  .then(users => {
    res.render("allUsers", {
      users
    });
  })
  .catch(next)
 
});

router.post("/user/delete/:id", (req,res) => {
  userModel
  .findByIdAndDelete(req.params.id)
  .then((dbRes) => {
    console.log("delete one users >>> ", dbRes);
    res.redirect("/all-simploniens");
  })
  .catch((dbErr) => console.error(dbErr));
});





router.get("/add-simplonien", (req, res) => {
  res.render("formUser");
});

router.post("/add-simplonien", (req, res, next) => {
  console.log(req.body);

userModel
.create(req.body)
.then((user) =>  res.redirect("/all-simploniens"))
.catch(next);

});

router.get("/api/simploniens", (req, res) => {
  res.json(users);
});



module.exports = router;