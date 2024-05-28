// Object literals

const user = {
  username: "Sayyed",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("got user details from database");
    // console.log(`Username: ${this.username}`); // used .this to access property within the object
    console.log(this); // it prints current context
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this) // prints empty object in global context

// const promiseOne = new Promise();
// const date = new Date();

// New keyword is a constructor function creates a new instance.
// new keyowrd create a empty object.

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  // function

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this; // does not require return it implicitly defines this
}

const userOne = new User("Sayyed", 12, true);
console.log(userOne);

// Constructor fucntion alway gives a new instance(new copy) everytime, does not affect the existing values.
