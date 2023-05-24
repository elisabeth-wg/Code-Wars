// How many consecutive numbers are needed ?

// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains[4, 8, 6] then the output should be 2 because two numbers need to be added to the array(5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

// function consecutive(arr) {
// //code me
// }

//P: Takes in an array of integers (zero apositive numbers only). Array can be empty.

//R: Returns a number which is the number of integers that would need to be added to count consecutively from the smallest to the largest number of the given array. 

//E: ([2,3,5]) --> 1 (number 4)
//   ([1]) --> 0
//   ([5,3,1]) --> 2 (number 2 & number 4)

//P: Take in an array of numbers. Find the greatest and smallest numbers and find the difference between them. Then subract the number of numbers in the area (and subtract one more). Return number


function consecutive(arr) {
  if(arr.length <= 1){
    return 0
  }else{
    let minNum = Math.min(...arr)
    let maxNum = Math.max(...arr)
    let numNeeded = maxNum - minNum - (arr.length-1)
    return numNeeded
  }
}