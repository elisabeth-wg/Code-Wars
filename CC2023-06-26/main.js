// Sort and Star

// DESCRIPTION:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// function twoSort(s) {

// }

//P: Takes in an array of strings.


//R: Return a string with *** between each letter. The string to return is the one which comes first when the array is placed in alphabetic/ascii value order (including capitalization). It is noted in the problem not to add or remove from the array.


//E: (['me', 'am'] --> 'a***m')
//   (['this', 'is', 'a', 'game'] --> 'a')
//   (['will', 'this', 'work'] --> 't***h***i***s')


//P: Use a method to sort the array into ascii order and save the first indexed element as a variable. Join it with *** between each character and return.

const twoSort = (s) => {
  s.sort()
  let first = s[0]
  first = first.split('').join('***')
  return first
}
