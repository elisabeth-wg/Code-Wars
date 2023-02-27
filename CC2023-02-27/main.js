
// Grasshopper - Summation

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


// var summation = function (num) {
//   // Code here
// }

//P: takes in positive integer greater than 0

//R: returns the sum as an integer

//E: (2, 3), (8, 36), (3, 6)

//P: set up a variable, and create a loop which adds to that variable until it reaches
//the num passed in. 



function summation(num){
  let sum = 0
  for (let i = 0; i <= num; i++){
    sum += i
  }
  return sum
}