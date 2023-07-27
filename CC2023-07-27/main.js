// No zeros for heros

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// function noBoringZeros(n) {
//   // your code
// }

//PREP:
//Takes in a number. Could be positive or 0.
//Return the number without the last digit if it is 0. But if it is zero alone, do not remove the zero.

// console.log(noBoringZeros(3010), 301);
// console.log(noBoringZeros(0), 0);
// console.log(noBoringZeros(-10), -1);

//Take in the number and check if it is zero, returning it as it is if so. Otherwise check if the last digit is zero and return without the last digit if so. Otherwise return as it is. 

const noBoringZeros = (n) => {

  while ( n % 10 == 0 && n != 0 ){
    n = n / 10;
    }

  return n;
}