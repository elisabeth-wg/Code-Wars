// Odd or Even ?

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

// function oddOrEven(array) {
//    //enter code here
// }

//P: Takes in an array of numbers. numbers could be positive, negative or zero. 

//R: Returns 'odd' or 'even' depending on if the sum of the array's numbers is even or odd. 

//E: ([2,1,8] --> 'odd')
//   ([3,4] --> 'odd)
//   ([8,3,1] --> 'even')

//P: Take in the array and find the sum using the reduce method. Then check if it is odd or even using modulus. Return the string, 'odd' if the sum is odd and 'even' if the sum is even. 



const oddOrEven = (array) => {
  const sum = array.reduce((acc, cur) => acc + cur, 0)
  if(sum % 2 === 0){
    return 'even'
  }else{
    return 'odd'
  }
}