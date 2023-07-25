// Find the position!

// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

//PREP:
//Will be given an letter of the alphabet in lowercase 'a'
//Will return the strin "Position of alphabet: _" with the correct number corresponding to the position in the alphabet
//['a'] -> "Position of alphabet: 1"
//['c'] -> "Position of alphabet: 3"
//['z'] -> "Position of alphabet: 26"
//Take in the letter find the position with .charCodeAt(0)-96 and return with template literal

const position = (letter) => {
  let posNum = letter.charCodeAt(0) - 96
  return `Position of alphabet: ${posNum}`
}

