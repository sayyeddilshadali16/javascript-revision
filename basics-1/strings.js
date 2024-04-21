const name = "sayyed";
const repoCount = 50;

// console.log(name + repoCount + "value"); // outdated not recommended

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("dilshad-ali");

// console.log(gameName)
// console.log(gameName.length)
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(6))
// console.log(gameName.indexOf("a"))

const newString = gameName.substring(0, 4);

// console.log(newString)

const anotherString = gameName.slice(0, 4); // can give negative values in range

// console.log(anotherString)

const newStringOne = "  sayyed  ";

// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://sayyed.com/sayyed%20dilshad";

// console.log(url.replace("%20", "-"));
// console.log(url.includes("dilshad"));

console.log(gameName.split("-"))

