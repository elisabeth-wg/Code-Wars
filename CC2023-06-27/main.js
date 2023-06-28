// Short Long Short

// DESCRIPTION:
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

// function solution(a, b){
//   // your code here
// }

//P: Takes in two strings, a and b. They could be empty strings but will not be the same length.

//R: Return a string with the longer string inside and the shorter on both the front and end of that longer string.

//E: ("3", "33") --> "2332"
//   ("", "3") --> "3"
//   ("a", "hi") --> "ahia"

//P: Take in both strings. Make a conditional if with the return template literal adding the shorter conditional outside the longer.


const solution = (a, b) => {
  if(a.length < b.length){
    return `${a}${b}${a}`
  }else{
    return `${b}${a}${b}`
  }
}
