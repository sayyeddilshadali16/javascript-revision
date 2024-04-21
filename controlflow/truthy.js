// const userEmail = "sayyed@gmail.com"; // assume string is truthy value
// const userEmail = ""; // empty string is falsy value
const userEmail = []; // empty array is truthy value

// if (userEmail) {
//   console.log("got user email");
// } else {
//   console.log("dont have user email");
// }

// falsy values
// false, 0, -0, BigInt - 0n, "", null, undefined, NaN

// truthy value
// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//   console.log("array  is empty");
// }

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("object is empty");
}

// false == 0 - true
// false == "" - true
// 0 == "" - true

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15;

// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80
  ? console.log("less than 80")
  : console.log("greater than 80");
