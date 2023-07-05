// Get number from string:

// DESCRIPTION:
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
// Function:
// getNumberFromString(s)

// function getNumberFromString(s) {
//   return 0;
// }


//P: Takes in a string with what could be numbers, letters and other characters. Does not specify if it could be empty.

//R: Return only the numbers, nothing else. Return as numbers vs. a string.

//E: ('Hi5' --> 5)
//   ('345' --> 345)
//   ('1' --> 1)


//P: Take in string, filter out the numbers and return. 

const getNumberFromString = (s) => Number(s.split('').filter((n) => n == parseInt(n)).join(''))