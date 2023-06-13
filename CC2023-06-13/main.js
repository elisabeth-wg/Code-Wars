// Find the capitals

// DESCRIPTION:
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar(capitals('CodEWaRs'), [0, 3, 4, 6]);

//P: Takes in an argument that is a string.

//R: Return an array with each indice of the string that holds a capital letter.

//E: ('Hello' ==> [0])
//   ('TestTest' --> [0,4])
//   ('LoooooNNG' --> [0,6,7,8])

//P: Take in the string. Iterate through and check if it equals a capital letter. Then push to a new array with the indice. Return the array after iterating through entire string.

function capitals(word){
  let arr = []
  for(let i = 0; i<word.length; i++){
    if(word[i]===word[i].toUpperCase()){
      arr.push(i)
    }
  }
  return arr
}

