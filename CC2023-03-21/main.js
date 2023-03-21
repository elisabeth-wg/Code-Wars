// Stringy Strings

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// function stringy(size) {
//   // your code here   
// }

//P: takes in a positive integer.

//R: returns a string of alternating 1's and 0's which always starts with a 1.

//E: (3, "101"), (8, "10101010"), (5, "10101")

//P: Take in the number parameter, create a string variable, create a loop if odd add a 1, if even add a 0 until reaching the parameter. Make sure to concatenate. Return the string. 

function stringy(size) {
  let str = ''
  for (let i = 1; i <= size; i++) {
    str = str + i%2  
  }
  return str;
}


//also learned new method used by others-->  str.padStart(size, '10')