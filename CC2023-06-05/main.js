// Remove First and Last Character Part Two

// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

// function array(string) {
//   // TODO
// }

//P: Takes in a string with characters seperated by commas.

//R: Returns a string with the first and last character removed and now seperated by spaces vs commas.

//E: ('1,3,5,6' --> '3 5')
//   ('3' --> null)
//   ('n1,n3,n6,n23,m6' --> 'n3 n6 n23' )

//P: Take in string. Seperate at commas into and array. If 3 or less characters return null. Otherwise pop and shift off the first and last index. Join back into a string using spaces vs commas and return the string.


const array = (string) => {
  let arr = string.split(',')
  if(arr.length >= 3) {
    arr.shift()
    arr.pop()
    console.log(arr)
    let str = arr.join(' ')
    return str
  }else{
    return null
  }
}  