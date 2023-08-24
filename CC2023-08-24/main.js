// Summing a number's digits

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// function sumDigits(number) {
// }

//PREP:
//Takes in an integer.
// Returns a number which is the sum of the digits in the parameter.
// console.log(sumDigits(10), 1);
// console.log(sumDigits(99), 18);
// console.log(sumDigits(-32), 5);
// Take in the integer from the argument. Find its absolute value with the method. Create an array using Array.from (Array.from(String(num), Number)) and find the sum using reduce which is then returned.

const sumDigits = (number) => {
  let num = Math.abs(number)
  let arr = Array.from(String(num), Number)
  let sumNum = arr.reduce((a, c) => a + c)
  return sumNum
}