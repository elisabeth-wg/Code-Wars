// Return Length of Arguments Passed

// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:

// Input: argsArr = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: argsArr = [{}, null, "3"]
// Output: 3
// Explanation:
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.
 

// Constraints:

// argsArr is a valid JSON array
// 0 <= argsArr.length <= 100

// /**
//  * @return {number}
//  */


// let argumentsLength = function(...args) {
    
//     console.log(args)
// };



// /**
//  * argumentsLength(1, 2, 3); // 3
//  */

//PREP
//Takes in an array with a length of 0-100. It could have any type of elements.
//Return the number of elements in the array
//([1, 'hello, null] -> 3)
//([1, 4, 5, {}, 'two'] -> 5)
//([] -> 0)
//Take in the array and return array.length

let argumentsLength = function(...args) {
    console.log(args)
    return args.length
};



