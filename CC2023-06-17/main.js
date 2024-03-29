// The highest profit wins!

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.


// function minMax(arr){
//   return [0,0]; // fix me!
// }


//P: Takes in an array with at least one postive integer.

//R: Return an array with the lowest and highest number (or the only number if there is only one).

//E: ([1,2,3,5] --> [1,5])
//   ([5,8,2,10] --> [2,10])
//   ([2] --> [2])

//P: Take in the array, create a new array and add the min and max to it. Return the new array. 

const minMax = (arr) => {
  let minMaxArr = [(Math.min(...arr)), (Math.max(...arr))]
  return minMaxArr
}