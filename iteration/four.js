// for in

// Used for objects

const obj = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift",
};

// for (const key in obj) {
//   console.log(`${key} is ${obj[key]}`);
// }

const programming = ["js", "rb", "py", "java"];

for (const key in programming) {
  console.log(programming[key]);
}
