var express = require("express");
var app = express();
var cors = require("cors");
require("./index");
let theme = require("./themeController");

app.use(cors());
app.use("/url", theme);
app.listen(3010, () => {
  console.log("Server running on port 3010");
});
