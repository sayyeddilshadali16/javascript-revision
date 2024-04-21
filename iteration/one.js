// for loop

// for (variable; condition check; increment) {
//     const element = array[index];
// }

// Steps for loops works -
// 1. initialization of variable
// 2. condition check if true, then execution
// 3. increment or decrement of index
// 4. repeat until check false

// for (let index = 0; index <= 10; index++) {
//   const element = index;
//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if ((element == 5)) {
//     console.log("number 5");
//   }
//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//   for (let j = 0; j <= 10; j++) {
//     console.log(`inner loop value ${j} and inner loop ${i}`);
//   }
//   console.log(`outer loop value ${i}`);
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "*" + j + "=" + i * j);
//   }
//   console.log(`Table of ${i}`);
// }

// const myArray = ["ironman", "hulk", "thor", "captian america"];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// break and contuniue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log("detected 5");
//     break;
//   }
//   console.log(`value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("detected 5");
    continue;
  }
  console.log(`value of i is ${index}`);
}
