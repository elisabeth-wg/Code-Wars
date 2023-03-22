// Find Nearest square number

// DESCRIPTION:
// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// Good luck :)

// Check my other katas:

// Alphabetically ordered

// Case-sensitive!

// Not prime numbers

// Find your caterer

// function nearestSq(n){
//     // your code
// }


//P: Takes in a positive integer

//R: Returns the closest square which will also be a positive integer

//E: (8 --> 9), (23 --> 25), (86 --> 81)

//P: Take in the integer. find it's square root. round that number and then square it. Return the square.


const nearestSq = n => (Math.round(Math.sqrt(n))) ** 2

