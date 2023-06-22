// DESCRIPTION:
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!

// function mergeArrays(arr1, arr2) {
  
// }

//P: Takes in two arrays. They could be empty. Otherwise they are with integers and in order either asc or desc.

//R: Return one array combining the two arrays and in asc order. If both arrays are empty return an empty array. Remove duplicate numbers.

//E: ([1,2,3], [4,5,6] -> [1,2,3,4,5,6])
//   ([], [] -> [])
//   ([6,4,2], [1,3,5] -> [1,2,3,4,5,6])

//P: Take in both arrays. Merge the arrays together. Use sort method to resort. Use method to remove duplicates and return the new array. 

const mergeArrays = (arr1, arr2) => {
  let arrTotal = arr1.concat(arr2)
  let arrTotalSorted = arrTotal.sort((a, b) => a - b);
  let arrTotalSortedUniq = arrTotalSorted.filter((value, index, array) => array.indexOf(value) === index);
  return arrTotalSortedUniq
}