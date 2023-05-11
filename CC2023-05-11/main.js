// Grasshopper - Check for factor

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non - negative number, factor is a positive number.

// function checkForFactor (base, factor) {
//   // code here
// }

//P: Takes in a base number (not negative) and a factor which is positive.

//R: Returns a Boolean based on whether the factor is a factor of the base.

//E: (9, 3 --> true), (12, 7 --> false), (12, 4 --> true)

//P: Take in the parameters. Create a ternary operator checking with modulus for a remainder. If zero return true. If another number return false. 