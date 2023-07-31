// Bin to Decimal

// Complete the function which converts a binary number(given as a string) to a decimal number.

// function binToDec(bin){
//   // ...
// }

//PREP
//binary number as a string
//return it as a number
// console.log(binToDec("1001001"), 73);
// console.log(binToDec("1"), 1);
// console.log(binToDec("0"), 0);
//Take in binary num and use parseInt with 2 for binary. Return new num.

function binToDec(bin){
  return parseInt(bin,2)
}

refactored
const binToDec = (bin) => parseInt(bin,2)
