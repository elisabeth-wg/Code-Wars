// Trimming a string

// Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// For example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

// If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H...", because 1 <= 3

// Requested maximum length will be greater than 0. Input string will not be empty.

// function trim(str, size) {
//   return str;
// }

//PREP
// Takes in a string and the maximum length of the string as a number.
// If the max number is 3 or less shorten the string and also add the 3 dots. If the max number is greater than three reduce the string to the max length, subtract 3 and add on 3 dots before returning.
// console.log(trim("Creating kata is fun", 14),"Creating ka...");
// console.log(trim("He", 1),"H...");
// console.log(trim("Code Wars is pretty rad", 50), "Code Wars is pretty rad");
//
//Create a conditional for the length of the max. 3 or less, shorten the length to the max and add 3 dots before returning. More than 3 shorten to length of max -3 and add 3 dots before returning.

const trim = (str, size) => str.length <= size ? str : str.slice(0, size - (size <= 3 ? 0 : 3)) + '...';