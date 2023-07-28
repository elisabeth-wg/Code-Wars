// Lario and Muigi Pipe Problem

// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

// function pipeFix(numbers){

// }

//PREP:
//Take in an array of numbers which could be negative or positive, but are whole numbers.
//Return an array beginning with the minimum num and ending with the maximun num with each whole number between those those numbers in escalating order.

// console.log(pipeFix([1,3,5]), [1,2,3,4,5]);
// console.log(pipeFix([-1,7,9]), [-1,2,3,4,5,6,7,8,9]);
// console.log(pipeFix([10,12,13]), [10,11,12,13]);

//Take in the array and find the minimun and maximum num. Set a new array to the minimum and increment it until it reaches the maxium at which time we will return it.

const pipeFix = (numbers) => {
  let numArr = []
  for(let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
    numArr.push(i)
  }
  return numArr
}