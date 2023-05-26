// Beginner Series #2 Clock

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59


// function past(h, m, s){
//   //#Happy Coding! ^_^
// }

//P: Takes in 3 parameters which are integers 0 and greater. The first represents hours and is a number 0 - 23. The second number represents minutes and is a number 0-59. The third number represents seconds and is a number 0-59.


//R: Return the value of the time in milliseconds since midnight vs hour min sec. It should be a number 0 or greater


//E: (0, 1, 1) --> 61000
//   (2, 0, 3) --> 7203000
//   (0, 0, 5) --> 5000


//P: Take in the hours, minutes and seconds. created a counter. run each number through the convertion for that variable and add to the counter. return number

function past(h, m, s){
  let ms = 0
  ms = (h*3600000)+(m*60000)+(s*1000)
  return ms
}

// refactored for codewars :
    
const past = (h, m, s) => (h * 3600000) + (m * 60000) + (s * 1000)

