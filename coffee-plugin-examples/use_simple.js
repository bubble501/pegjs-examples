// Generated by CoffeeScript 1.6.2
(function() {
  var PEG, r;

  PEG = require("./simple.js");

  r = PEG.parse("2+3*(2+1)-10/2");

  console.log(r);

}).call(this);
