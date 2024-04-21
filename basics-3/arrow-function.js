const user = {
  username: "sayyed",
  price: 999,
  welcomeMessage: function () {
    // console.log(`${this.username} , welcome to website`); // to refer current context this keyword is used
  },
};

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

// function one(){
//   let username = "sayyed"
//   console.log(this.username)
// }
// one()

// const one = function() {
//   let username = "sayyed";
//   console.log(this.username);
// };

const one = () => {
  let username = "sayyed";
  console.log(this.username);
};
// one();

// const addTwo = (num1, num2) => { // return is must in curly braces
//   return num1 + num2;
// };

// const addTwo = (num1, num2) =>  num1 + num2; // implicit return arrow function
// const addTwo = (num1, num2) =>  (num1 + num2); // paranthiese doesn't need return
const addTwo = (num1, num2) => ({ username: "sayyed" }); // return an object inside paranthieses

console.log(addTwo(3, 4));

// const myArray = [2,3,4,5,6]

// myArray.forEach(()=>{})