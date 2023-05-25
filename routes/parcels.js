var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send({
    imports: {
      "@single-spa/welcome":
        "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
      "@associacao/root-config": "//localhost:9000/associacao-root-config.js",
      "@associacao/design-system":
        "//localhost:9001/associacao-design-system.js",
      "@associacao/app-login": "//localhost:8080/associacao-app-login.js",
      "@associacao/app-header": "//localhost:8081/associacao-app-header.js",
      "@associacao/app-home": "//localhost:8082/associacao-app-home.js",
    },
  });
});

module.exports = router;
