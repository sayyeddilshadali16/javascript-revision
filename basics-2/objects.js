// Objects and events are most in JavaScript

// Objects are declared in two ways literals and constructors

// singleton (Literals doesn't makes sigleton object)

// Object.create // it is constructor method and singleton is created into this

// Object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Sayyed",
  "full name": "Sayyed Dilshad Ali",
  [mySym]: "myKey1",
  age: "23",
  location: "Nagpur",
  email: "sayyed@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email); // commonly used method to access object
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sayyed@outlook.com";
// Object.freeze(JsUser);
JsUser.email = "sayyed@icloud.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello js");
};

JsUser.greetingTwo = function () {
  console.log(`hello js user, ${this.age}`); // to access the properties inside the object
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
