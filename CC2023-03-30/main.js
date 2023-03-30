// Sum The Strings

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2-- > Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" -- > "-2"

// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// function sumStr(a,b) {
  
// }

//P: Takes in 2 integers as strings. Could also be an empty string which would be considered a zero. Could be a negative number.


//R: Returns a string which is the sum of the two integers.


//E: ("2", "3" --> "5"), ("", "1" --> "1"),  ("-2", "5" --> "3")


//P: Take in the two strings and make them numbers, add them (considering empty string a zero), and return as a string. 

const sumStr = (a, b) => (Number(a) + Number(b)).toString()