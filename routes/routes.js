var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      path: "/usuarios",
      name: "app-home",
      exact: false,
    },
    {
      path: "/mgm",
      name: "app-home",
      exact: false,
    },
  ]);
});

module.exports = router;
