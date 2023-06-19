// Testing 1 - 2 - 3

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
//     ["a", "b", "c"]-- > ["1: a", "2: b", "3: c"]

//  var number=function(array){
//   //your awesome code here
// }

//P: Takes in an array of strings.

//R: Returns the array with each string numbered beginning with 1 and each having a colon and a space before the original string.

//E: (["hi", "hello", "me"] --> ["1: hi", "2: hello", "3: me"])
// ([] --> [])
// (["one", "two"] --> ["1: one", "2: two"])

//P: Take in the array and use a loop to iterate and add in the number, colon, space. Then return the array.

const number = (array)=> {
  let newArr = array.map((e,i) => `${i+1}: ${e}`);
  return newArr
}