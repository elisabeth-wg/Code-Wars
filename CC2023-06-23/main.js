// Find Duplicates

// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []

// function duplicates(arr) {
//   //TODO: return the array of duplicates from arr
// }

//P: Takes in an array. They may be numbers or strings.

//R: Return only the duplicated elements. Return in the same order they were orginially in as soon as duplicated (second one appears). Do not return the elements which did not have duplicates. If none return empty array.

//E: ['1', 1, 'two, 1] --> [1]
//   [1,2,3,3,4,5,4] --> [3,4]
//   [5,6,7,4,3,2,5,8,9] --> [5]

//P: Use set to create a filter without the duplicated elements and return. 


const duplicates = (arr) => {
  return [...new Set(arr.filter((e, i, a) => a.indexOf(e) !== i))]
}
  
