// if statement

// if (condition) {

// }

// const isUserLoggedIn = true
// if(isUserLoggedIn){

// }

// if (2 != 3) {
//   console.log("executed");
// }

// const temp = 41;
// if (temp === 40) {
//   console.log(`${temp} deg C less than 50`);
// } else {
//   console.log("temp is greater than 50");
// }
// console.log("execute")

// operators

// < - less than
// > - greatet than
// <= - less than or equal to
// >= - greater than or equal to
// == - equals
// != - not equals
// === - strict equal(equal value equal type)
// !== - anti-pattern checking

// const score = 200
// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }

// const balance = 1000;
// if (balance > 500) console.log("test"); // implicit scope

// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("less than 500");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

// logical operators

if (userLoggedIn && debitCard) {  // both and statement must be true
  console.log("allow purchase");
}

if(loggedInFromGoogle || loggedInFromEmail){ // on of the statement must be true
    console.log("user logged in")
}