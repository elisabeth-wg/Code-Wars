// Multiple of index

// DESCRIPTION:
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

// function multipleOfIndex(array) {
//   // good luck
// }


//P: Takes in an array with a length greater than 1. Elements are positive and negative integers


//R: Return an array with only the elements whose indexes are multiples of that element. Wording seems off. 


//E: [10, 3, 24, 14] -> [3, 24]
//   [3, 11, 12, 20] -> [11, 12]
//   [1, 18, 4, 9]   -> [18, 4, 9]


//P: Take in array of elements. Use the filter method. Check with modulus if the index is a multiple and filter those in. Return array.

const multipleOfIndex = (array) => array.filter((el, i) => el % i === 0)

