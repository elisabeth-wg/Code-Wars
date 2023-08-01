// Pythagorean Triple

// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

// A Pythagorean Triple consists of arranging 3 integers, such that:

// a2 + b2 = c2

// Examples
// [5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

// [3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

// [13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132

// [100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2

// Return Values

// For JavaScript: return true or false

// function isPythagoreanTriple(integers) {
//   // Good luck friends!
// }

//PREP
// Given 3 positive integers
// Return true or false. True if the integers can be arrange so that 2 of them squared and added together equals the 3rd one squared.
// console.log(isPythagoreanTriple([3, 4, 5]), true);
// console.log(isPythagoreanTriple([3, 4, 9]), false);
// console.log(isPythagoreanTriple([100, 3, 99]), false);
//Take in the three integers and create a conditional checking the different possibilites and returning true if any are found. Otherwise return false.


function isPythagoreanTriple(integers) {
  if  ((integers[0]**2) + (integers[1]**2) === (integers[2]**2)) {
    return true;
  } else if ((integers[0]**2) + (integers[2]**2) === (integers[1]**2)) {
    return true;
  } else if ((integers[1]**2) + (integers[2]**2) === (integers[0]**2)) {
    return true;
  } else { return false }
}