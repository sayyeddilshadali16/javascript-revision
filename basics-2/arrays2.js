const marvel_heros = ["thor","hulk","ironman"]
const dc_heros = ["superman","batman","flash"]

marvel_heros.push(dc_heros) // takes array into array

// console.log(marvel_heros)
// console.log(marvel_heros[3][1]) // not good practice

const newArr = marvel_heros.concat(dc_heros) // concat returns new array
// console.log(newArr)

const allHeros = [...marvel_heros,...dc_heros] // spread operator (spread values)
// console.log(allHeros)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realArray = anotherArray.flat(Infinity) // takes depth  
// console.log(realArray)

// console.log(Array.isArray("Sayyed")) // check
// console.log(Array.from("Sayyed")) // converts value into array
// console.log(Array.from({name:"Sayyed"})) // 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // return new array from set of elements