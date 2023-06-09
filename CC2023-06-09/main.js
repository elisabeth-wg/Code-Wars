// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//   return '';
// }

//P: Takes in a string as a parameter.

//R: Return the string without the exclamation points.

//E: ('Hi there!' --> 'Hi there')
//   ('Whoa!!' --> 'Whoa')
//   ('!One!Two!Three' --> 'OneTwoThree)

//P: Take in the string and use a method like replace or replaceAll to find the exclamation points and remove them. Then return the string without the exclamation marks.

const removeExclamationMarks = (s) => s.replaceAll("!", "")

