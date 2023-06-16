// Sum of two lowest positive integers

// DESCRIPTION:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// function sumTwoSmallestNumbers(numbers) {
//   //Code here
// }

//P: Takes in an array of positive integers (to floats or negative nums).

//R: Return the sum of the two lowest numbers in the array.

//E: ([1,16,13,2] --> 3)
//   ([70,20,13,8,3,80] --> 11)
//   ([5,3,7,2] --> 5)

//P: Take in array. Sort by number. Add two first indices and return.

function sumTwoSmallestNumbers(numbers) {  
  function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
  }
  numbers.sort(compareNumeric);
  let sum = numbers[0] + numbers[1]
  return sum
}