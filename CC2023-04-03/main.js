// Find the Remainder

// Task:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero(refer to the specifications on how to handle this in your language)


//P: Takes in two integers which could be positive or negative. 

//R: Returns the remainder of the two numbers when the larger is divided by the smaller (as an integer)

//E: (15, 3 --> 0), (3, 10 --> 1), (13, 3 --> 1)

//P: Take in the two numbers and write a conditional where if n is larger it is divided by m or vice versa. The remainder is then returned.


// function remainder(n, m){
//   // Divide the larger argument by the smaller argument and return the remainder
  
// }

const remainder = (n,m) => n>m ? n%m : m%n