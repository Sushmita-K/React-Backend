module.exports = (function() {
  let { themes } = require("./theme");
  const express = require("express");
  const router = express.Router();

  router.get("/", (req, res) => {
    themes.find({}).then(result => {
      res.send({
        result
      });
    });
  });

  return router;
})();
