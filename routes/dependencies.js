var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send({
    imports: {
      "single-spa":
        "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
      react:
        "https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js",
      "react-dom":
        "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js",
      "@mui/material":
        "https://cdn.jsdelivr.net/npm/@mui/material@5.10.6/umd/material-ui.production.min.js",
      "@emotion/react":
        "https://cdn.jsdelivr.net/npm/@emotion/react@11.9.3/dist/emotion-react.umd.min.js",
      "@emotion/styled":
        "https://cdn.jsdelivr.net/npm/@emotion/styled@11.9.3/dist/emotion-styled.umd.min.js",
      "@mui/icons-material":
        "https://cdn.jsdelivr.net/npm/@mui/icons-material@5.11.16",
    },
  });
});

module.exports = router;
