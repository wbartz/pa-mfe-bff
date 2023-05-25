var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      path: "/mgm",
      name: "app-home",
      exact: false,
    },
    {
      path: "/login",
      name: "app-login",
      exact: false,
    },
  ]);
});

module.exports = router;
