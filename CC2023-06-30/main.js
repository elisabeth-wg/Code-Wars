// Reversing Words in a String

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

//function reverse(string){
  //your code here
//}

//P: Takes in a string which could be empty or have words.

//R: Returns a string with any words in the string reversed.

//E: "hello mate" --> "mate hello"
//   "" --> ""
//   "Dinner time." --> "time. Dinner"

//P: Seperate into an array. Then reverse and join. Return string.


const reverse = (string) => string.split(" ").reverse().join(" ")
