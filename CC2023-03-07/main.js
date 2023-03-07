// Find numbers which are divisible by given number

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// function divisibleBy(numbers, divisor){

// }


//P: First arguement is an array of numbers (positive integers including zero), second argument is also a positive integer
//which will be the divisor. 

//R: Return an array of the numbers which are divisible by the second argument (the divisor)

//E: ([2,4,5,6,9], 3) --> [6,9], ([5,10,3,8], 5) --> [5,10], ([0, 2, 3, 4, 8, 12], 4) --> [0, 4, 8, 12]

//P: Take in the array as an argument
// iterate through the array and use modulous to check if each element is divisible by the divisor (second argument)
// if it is divisible leave it intact
// if it is not divisible (if there is a remainder), pop the element off the array. 
// return the array of numbers


const divisibleBy = (numbersArr, divisor) => numbersArr.filter(e => e % divisor === 0);