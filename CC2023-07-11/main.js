// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
    
// };

//PREP
//Takes in a array of numbers, and a separate target number. Whole positive numbers.
//Return the indices of the two numbers in the array that add up to the target number.
//([1,2,3,4,5], 8) --> [3,5]
//([1,3,4,5], 4) --> [1,3]
//([5,22,6,4], 10) --> [6,4]
//Take in the array. Use a hashmap. Create a variable object. Run a for loop. If the difference between the target and the array element isn't in the hashmap object currently, add it until it matches a num in the object. Once it's match is found return the indices of both nums.

var twoSum = function(nums, target) {
  const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    // If the difference is in the hashmap, return the indices.
    if (diff in hashmap) { // or, hashmap[diff] !== undefined
      return [hashmap[diff], i];
    }

    // Otherwise, add the current number to the hashmap.
    hashmap[nums[i]] = i;
  }

  return [];
}