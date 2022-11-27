// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3]-- > [2, 4, 6]

//P: Will it always be integers? Any special characters? An empty arr?
//R: Return a new array with where each value is doubled
//E: If we are given [2,4,6], return [4,8,12]
//   If we are given [1,3,4], return [2,6,8]
//   If we are given [8,10], return [16,20]
//P: Make a function
//   Map through the array and multiply each element by 2
//   Return the array 


function maps(x) {
    return x.map(v => v * 2);
}