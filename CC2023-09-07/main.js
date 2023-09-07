// Small enough ? - Beginner
    
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.




// PREP:
// Takes in an array filled with numbers as well as another number/limit.
// Return true if the all of the numbers in the array are equal or less than the limit number. Return false if any of the numbers in the array are larger than the limit number.
// console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true)
// console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
// console.log(smallEnough([66, 101], 200), true);
//Find the max of the array and compare it to the limit number. If it is less than or equal to the limit, return true otherwise false.

const smallEnough = (a, limit) => Math.max(...a) <= limit ? true : false;