// Find the middle element

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// function gimme (triplet) {

// }

//P: Takes in an array with 3 numbers. These could be floats, positive or negative numbers.


//R: Returns the index of the element which would fall in the middle if they were ordered smallest to greatest. The index returned is the location of the element before it is ordered.

//E: ([2,6,4] --> 2)
//   ([8,3,11] --> 0)
//   ([1,2,3] --> 1)


//P: Take in the array of three numbers. Find min and max. Find the number that isn't min or max and use index of to return the index of that middle number.

const gimme = (triplet) => {
  let minNum = Math.min(...triplet);
  let maxNum = Math.max(...triplet);
  let dupArr = triplet
  let middleNumArr = triplet.filter(n => (n!=minNum && n!=maxNum))
  let middleNum = Number(middleNumArr.toString())
  return (dupArr.indexOf(middleNum));                                   
}



