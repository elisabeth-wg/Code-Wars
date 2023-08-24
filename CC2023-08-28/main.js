// Sort Numbers

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){

}

//PREP:
// Takes in an array which may have numbers or be empty/null.
// Returns an array which is either in numeric order if numbers are present otherwise an empty array.
// console.log(solution(null), [])
// console.log(solution([20, 2, 10]), [2,10,20])
// console.log(solution([2, 20, 10]), [2,10,20]);
// Take in the array. If null return empty array otherwise sort method to put in ascending order and return.

const solution = (nums) => nums === null ? [] : nums.sort((a, b) => a - b);