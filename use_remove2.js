#!/usr/bin/env node
var PEG = require("./removeleftrecursionwithintermidateactions2.js");
var input = process.argv[2] || "5-1-2";
console.log(input);
var r = PEG.parse(input);
console.log(r);


