// for of

// Used for arrays

// ["", "", ""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

// for (const iterator of object) {

// }

// for (const num of arr) {
//   // here object refer to which variable the iteration should apply
//   console.log(num);
// }

// const greetings = "Hello!";
// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`);
// }

// Map

const map = new Map(); // map is object holds key value pair and returns unique value
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const obj = {
    game1: "NFS",
    game2: "COD",
    game3: "Tekken"
}

for (const [key, value] of obj){
    console.log(`Each value is ${obj}`)
}