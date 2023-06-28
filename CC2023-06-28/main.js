// Contamination #1 - String -

// DESCRIPTION:
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// function contamination(text, char){
//   // Code here ;)
// }

//P: Takes in two parameters as strings. One is empty or one character long. The other is empty or 2+ characters long.

//R: Return empty if either of the two parameters are empty. Otherwise return a string that is as long as the longer string but using only the 1 character string repeatadly.

//E: ("hello", "i") --> "iiiii"
//   ("", "i") --> ""
//   ("alien", "&") --> "&&&&&"


//P: Take in the two strings. Use ternary operator to check if empty and return empty if so. Otherwise iterate through and += the new char for the length of the first parameter. 

const contamination = (text, char) => {
  let contaminatedStr = ""
  for(let i = 0; i < text.length; i++){
    contaminatedStr += char
  }
  return contaminatedStr
}

//Could have used .repeat:
// function contamination(text, char){
//  return char.repeat(text.length)
//}