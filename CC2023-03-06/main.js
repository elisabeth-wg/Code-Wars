
// Vowel remover

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


//P: Will be given a string with letters and vowels, do not remove the upper case vowels.

//R: Return a string without the vowels 

//E: ("hi", "h"), ("BIG", "BIG" ), ("spaceship", "spcshp")

//P: Take in a string, is there a string method to find a letter? Otherwise split, iterate check for vowel, remove (push to new arr), join, return


// function shortcut (string) {
//   return '';
// }

function shortcut (string) {
  arr = string.split('')
  const newArr = arr.filter(x => (x !== 'a' && x !== 'e' && x !== 'i'&& x !== 'o' && x !== 'u'))
  return newArr.join('')
}