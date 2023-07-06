// Capitalization and Mutability

// DESCRIPTION:
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

// function capitalizeWord(word) {
//   word[0].toUpperCase();
//   return word;
// }

//P: The problem says it will be a one word string with letters, 1 to 10 characters long.

//R: Fix the code so that it returns the word with the first letter capitalized.

//E: Only one example due to problem type.

//P: Check the variables passed in to make sure they match. Make sure they are using toUpperCase correctly. Check for syntax errors.


function capitalizeWord(word)
{
    return word[0].toUpperCase() + word.slice(1);
}


