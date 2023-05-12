
// Difference of Volumes of Cuboids

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

// function findDifference(a, b) {
//   //loading...
// }

//P: Takes in two lists of 3 positive integers (whole numbers). 


//R: Return the difference between the cubinoids created from the two lists regardless of order. Should be a number.


//E: ([1,2,3], [2,3,4] --> 18), ([4,2,5], [3,8,2] --> 14), ([10,2,3], [5,3,7] --> 45) 


//P: Take in the two arrays of numbers. Find the difference after multiplying the array elements to find the volume. Return the difference as a positive number.

const findDifference = (a, b) => {
  let diff = (a[0]*a[1]*a[2])-b[0]*b[1]*b[2]
  diff < 0 ? diff=diff*-1 : diff=diff
  return diff
}