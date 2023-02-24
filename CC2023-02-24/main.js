// Descending Order

// DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// function descendingOrder(n){
//   //...
// }


//P: positive integers can include zero
//R: return an integer in decending order
//E: (234, 432), (5689, 9865), (4656, 6664)
//P: take in a num zero or greater, change to an array if needed, put in decending order and join back into a num, return num

// function descendingOrder(n){
//   const num = Number(n.toString().split('').sort().reverse().join(''))
//   console.log(num)
//   return num
// }


//the above works, refactored below to codewars liking

const descendingOrder = n => Number(n.toString().split('').sort().reverse().join(''))