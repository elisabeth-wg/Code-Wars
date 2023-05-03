// Sum even numbers

// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0

// function sumEvenNumbers(input) {
//   // [...]
// }

//P: Takes in a single array as the paramenter. The array holds numbers. 

//R: Returns the sum of the even values of the array. 

//E: ([2,3,4,5] --> 6),  ([0] --> 0), ([12,6,7,9,4] --> 22)

//P: Take in the array as the parameter. Filter through the array adding only the even numbers to the new array, reduce it to find the sum, which will be returned.

function sumEvenNumbers(input) {
  const evenArr = input.filter(x => x % 2 === 0).reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0);
  return evenArr
}