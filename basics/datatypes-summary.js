// Javascript is dynamically typed language

// PRIMITIVE DATATYPE

// 7 types: string, number, boolean, null, undefined, symbol, bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

//console.log(id === anotherId); // unique

const bigNumber = 826589689562921225n; //bigInt

// REFERENCE (NON PRIMITIVE)

// arrays, objects, functions

const heros = ["ironman", "thor", "hulk"];

let obj = {
  name: "sayyed",
  age: 23,
};

const myFunc = function () {
  console.log("Heyy");
};

// console.log(typeof myFunc);

// ****************************

// Stack (Primitive), Heap (Non-primitive)

let myName = "Sayyed";
let anotherName = myName;
anotherName = "Dilshad";

console.log(myName);
console.log(anotherName);

let user = {
    email:"user@google.com",
    upi: "acb@hdfc"
}


