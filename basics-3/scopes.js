// var c = 30;

let a = 300; // global scope

if (true) {
  let a = 10;
  const b = 20;
  //console.log("Inner: ", a);
} // block scope or braces scope

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Sayyed";

  function two() {
    const website = "youtube";
    console.log(username); // the inner function can access outer varible
  }
  //   console.log(website); // inner variable cannot ne accessed outside the inner function
  two();
}

// one();

if (true) {
  const username = "sayyed";
  if (username === "sayyed") {
    const website = " youtube";
    //  console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// Concept

function addOne(num) {
  return num + 1;
}

console.log(addOne(5));

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(3));
