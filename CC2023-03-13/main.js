// All Star Code Challenge #18

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// function strCount(str, letter){  
//   //code here
// }


//P: Takes in a string and a character. Can be an empty string, if so return 0.

//R: Returns an int counting how many times the character is found in the string. 

//E: ('goose', 'o') --> 2   ('green', 'n') --> 1  ('dog', 'g') --> 1

//P: Take string and char into function. Use include() method or iterate and check for char.
//Keep count of number of char occurances and return


function strCount(str, letter){  
  let count = 0
  for(let i = 0; i <= str.length; i++){
    if(str[i] === letter){
      count += 1
    }
  }
  return count
}