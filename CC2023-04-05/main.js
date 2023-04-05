
// What is between ?

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// function between(a, b) {
//   // your code here
// }

//P: Takes in two integers (a, b). Could be positive or negative.

//R: Return an array with all integers between the two number and any between them. 

//E: (1,3 --> [1,2,3]), (1,8 --> [1,2,3,4,5,6,7,8]), (-3,4 --> [-1,0,1,2,3,4])

//P: Take in the two numbers. Create an array and push to it b-a+1 times starting with a. return the array

function between(a, b) {
  let arr = []
  for (let i = a; i <= b; i++){
    arr.push(i)
  }
  return arr
}