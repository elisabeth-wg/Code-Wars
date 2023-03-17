// Super Duper Easy

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// function problem(x){
//   //your code here
// }

//P: Takes in an integer (positive or negative), it a string return "Error"

//R: Returns the answer to the equation or "Error"

//E: (2, 106), (5, 256), ("", "Error")

//P: Take in integer or string. If str return "Error", else num*50+6

const problem = x => x === x.toString() ? "Error" : x * 50 + 6