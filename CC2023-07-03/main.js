// Find the index of the second occurrence of a letter in a string

// DESCRIPTION:
// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1
// Good luck;) And don't forget to rate this Kata if you liked it.

// function secondSymbol(s, symbol) {
//   // your code
// }

//P: Takes in a string and a letter.


//R: Returns the index of the second occurance of the letter as it falls in the string.


//E: ("strawberry", "r") --> 7
//   ("icecream", "i") --> -1
//   ("boat", "z") --> -1

//P: Find the .indexOf() the first string if it exists. If it doesn't return -1. Find that character again with indexOf() and use the first index + 1 as a starting point. If it works return the index + 1 (for the removed character). In no second instance of that character exists return -1.

function secondSymbol(s, symbol) {
  const firstOccurrence = s.indexOf(symbol);
  const secondOccurrence = s.indexOf(symbol, firstOccurrence + 1);
  return secondOccurrence
}

//refactored
//function secondSymbol(s, symbol) {
//  return s.indexOf(symbol, s.indexOf(symbol) + 1);
//}