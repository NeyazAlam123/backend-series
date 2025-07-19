var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.cookie("age", 20);
  res.render("index");
});

router.get("/read", function (req, res) {
  console.log(req.cookies.age)
  res.send("sheckin is the key of invention.")
});

router.get("/delete", function (req, res) {
  res.clearCookie("age")
  res.send("it is all about clear thing like this")
});
module.exports = router;
