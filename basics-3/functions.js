function sayMyname() {
  console.log("S");
  console.log("A");
  console.log("Y");
  console.log("Y");
  console.log("E");
  console.log("D");
}

// sayMyname()

// function addTwoNumbers(num1, num2) {
//   // parameters
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}

const result = addTwoNumbers(3, 5); // arguments
// console.log("Result:", result);

function loginUserMessage(username = "sam") {
  // default value (if parameter is not passed we can set default value by equals)
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Sayyed")); // empty string is false value, undefined is false value
// console.log(loginUserMessage()); // if argument is not passed it prints undefined

function calculateCartPrice(val1, val2, ...num1) {
  // rest operator (returns an array arguments passed)
  return num1;
}

// console.log(calculateCartPrice(200, 300, 400));

// const user = {
//   username: "sayyed",
//   price: 999,
// };

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "sayyed",
  price: 999,
});


const newArr = [200,300,400]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(newArr))
console.log(returnSecondValue([200,4000,5000]))
