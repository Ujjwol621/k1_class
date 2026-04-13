// console.log("this is module first.js");
// let val = require("./second.js");
// console.log(val);

// console.log(val.add(10, 20));

// You can also destructure the imported module like this:
// let { x, user, arr, add } = require("./second.js");
// console.log(x);
// console.log(user);
// console.log(arr);
// console.log(add(10, 20));

// You can also use the ES6 import syntax if your environment supports it:
// import { x, user, arr, add } from "./second.js";
// console.log(x);

// you can also use the ES6 import syntax if your environment supports it (for single export):
import user from "./second.js";
console.log(user);