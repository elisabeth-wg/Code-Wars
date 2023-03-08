// Exes and Ohs

// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// function XO(str) {
//     //code here
// }

//P: Takes in a string as an argument. It can contain any char.

//R: Result will be a boolean (true or false)

//E: ('ooxxap') --> true , ('OXABoOx') --> false, ('pqye') --> true 

//P: Take in a string as an argument, split into an array, make a variable for x's and o's.
//iterate through the array and add to variables. Make sure to check for upper and lowercase examples. Check if variables are the same number
//and return true if they are equal and false in they are not equal. 


function XO(str) {
  let x = 0
  let o = 0
  let arr = str.split('')
  arr.forEach((e) => {
    if(e === 'x' || e === 'X'){
      x++
    }else if(e === 'o' || e === 'O'){
      o++
    }
  })
  if(o === x){
    return true
  } else{
    return false
  }
}
