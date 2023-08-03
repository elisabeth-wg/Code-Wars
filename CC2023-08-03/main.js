// Take the Derivative

// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8) --> this should output "56x^7"
// derive(5, 9) --> this should output "45x^8"
// Notes:

// The output of this function should be a string
// The exponent will never be 1, and neither number will ever be 0

// function derive(coefficient,exponent) {
  
// }

//PREP:
// Takes in two numbers which will be greated than 0, with the second number never being 1, and neither are zero.
// Return a string with the format of : both num multipled + x + ^ + the second num-1 (unless the second num is 2 in which case we leave it 2.)

// console.log(derive(7,8), "56x^7");
// console.log(derive(5,9), "45x^8");
// console.log(derive(2,6), "12x");

//Take in the two numbers. Subtract one from the second num. Use a template literal to organize and return the expression as a string.

const derive = (c,e) => {
  let mult = c*e
  e = e-1
  let exp = `${mult}x^${e}`
  return exp
}

refactored

function derive(coefficient,exponent) {
  return `${coefficient*exponent}x^${exponent-1}`
}