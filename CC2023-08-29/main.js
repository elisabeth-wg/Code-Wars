// Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces" ==> "elbuod  secaps"

// function reverseWords(str) {
//   // Go for it
// }


//PREP:
// Takes in a string which is not empty.
// Returns a string with each word itself reversed though words remain in their order and spaces remain as well.

// console.log(goals(43, 10, 5), 58);
// console.log(goals(0, 0, 0), 0);
// console.log(goals(0, 10, 13), 23);

// Seperate string into array of words. Reverse the order of each word and join back into a string. Return the string.

function reverseWords(str) {
return str.split('').reverse().join('').split(' ').reverse().join(' ')
}
