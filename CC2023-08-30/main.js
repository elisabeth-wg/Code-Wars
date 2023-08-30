// Sort array by string length

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// function sortByLength (array) {
//   // Return an array containing the same strings, ordered from shortest to longest
// };

//PREP:
// Takes in an array of strings. They will be of different lengths.
// Return an array with those strings from shortest to longest.
// console.log(goals(43, 10, 5), 58);
// console.log(goals(0, 0, 0), 0);
// console.log(goals(0, 10, 13), 23);
// Use the sort method to order the array from shortest to longest and then return the array.

const sortByLength = (array) => {
  function compare(a, b) {
  return a.length - b.length;
} 
  return (array.sort(compare))
}