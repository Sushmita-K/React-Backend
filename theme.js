var mongoose = require("mongoose");
var themes = mongoose.model("themes", {
  title: String,
  moreInfo: String,
  rate: Number,
  className: String,
  iconClass: String,
  isPercentage: false
});
module.exports = { themes };
