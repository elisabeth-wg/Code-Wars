// Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// function longest(s1, s2) {
//   // your code
// }


//PREP:
// Takes in two strings of letters from a-z. All lower case.
// Return a new string in order with letters from both strings combined but used only once.
// console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
// console.log(longest("abc", "def"), "abcdef");
// console.log(longest("ccc", "ccc"), "c");
// Combine both strings, sort alphbetically, created new string with only one occurance.

function longest(s1, s2) {
  let s1s2 = s1 + s2
  let newArr = s1s2.split('').sort()
  let unique = [...new Set(newArr)]
  let newStr = unique.join('')
  return newStr
}