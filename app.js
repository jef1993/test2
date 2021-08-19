const { num, ...num2 } = require("./module");
const { ...all } = require("./math");

const { multiply, divide } = all;
const fs = require("fs");
const os = require("os");

const _ = require("lodash");

// console.log(multiply(2, 14));
// console.log(divide(18, 3));

// console.log(fs);

// fs.appendFile("text1.txt", `hello`, (err) => {
//   if (err) {
//     console.log("sth wrong");
//   }
// });

console.log(_.now());

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d", "e"];

console.log(_.concat(arr1, arr2));
