const arr = [1,2,3,4,true]

// console.log(arr[0])

// Array methods

arr.push(6) // add values at end
arr.pop() // removes last value
arr.unshift(0) // add values at start
arr.shift() // removes start value

// console.log(arr)
// console.log(arr.includes(9))
// console.log(arr.indexOf(9))

const newArr = arr.join()
// console.log(newArr)

// slice, splice

console.log("A ", arr)

const myn1 = arr.slice(1,3)

console.log(myn1)
console.log("B ", arr)

const myn2 = arr.splice(1,3)
console.log(myn2)
