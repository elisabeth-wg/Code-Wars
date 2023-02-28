// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(arr) {
  let sum = 0 
  arr.forEach((e) => {
    sum += Number(e)
  })
  return sum
}