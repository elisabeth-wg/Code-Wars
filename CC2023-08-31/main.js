// Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


//PREP:
// Takes in two strings
// Returns a boolean of true if the two strings anagrams of one another. Otherwise it returns false if they are not anagrams of one another. Case does not matter.
// console.log(isAnagram("foe", "fee"), false, 'The word "foe" is not an anagram of "fee"')
// console.log(isAnagram("cat", "tac"), true, 'The word "cat" is an anagram of "tac"')
// console.log(isAnagram("Twoo", "WooT"), true, 'The word "Twoo" is an anagram of "WooT"')

//Take in the two strings. Split into an array and put in alphabetic order in lowercase. If they are equal return true else return false. 

const isAnagram = (test, original) => {
  let alteredTest = test.toLowerCase().split('').sort().join('')
  let alteredOriginal = original.toLowerCase().split('').sort().join('')
  return alteredTest == alteredOriginal ? true : false;
}