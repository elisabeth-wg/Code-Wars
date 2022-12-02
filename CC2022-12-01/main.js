//Highest and Lowest 6kyu

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  numbers = numbers.split(" ");
  return Math.max(...numbers) +" "+ Math.min(...numbers);
}

//P: Will there br decimals, letters, non space separated strs?

//R: Return two numbers as a str, highest space lowest

//E: If given "1 5 8" return "8 1"
//   If given "3 -3 10 8" return "10 -3"
//   If given "7 10 8 3 5" return "10 3"

//P: Take in str
// make into an array at spaces with split
//iterate thru for highest and save to pre created variable
//iterate thru for lowest and save to pre created variable
//return highest + lowest
//gave up on for loop and went with Math.max and Math.min once I recalled them