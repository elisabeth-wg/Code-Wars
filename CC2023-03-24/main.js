// Thinkful - Logic Drills: Traffic light

// You're writing code to control your town's traffic lights.You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

// function updateLight(current) {
  
//   //your code here!

// }

//P: Takes in a string as an argument, doesn't note empty or other types of strings except for the specified strings. 

//R: Returns a string

//E: ('green' --> 'yellow), ('yellow' --> 'red'), ('red' --> 'green')

//P: Take in string of green, yellow, or red. Create a conditional returning the appropriate string. 

function updateLight(current) {
  if(current === 'green'){
    return 'yellow'
  }else if(current === 'yellow'){
    return 'red'
  }else{
    return'green'
  }
}