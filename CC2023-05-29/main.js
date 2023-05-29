// Closest elevator

// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

// function elevator(left, right, call){
//   // code on! :)
// }

//P: Takes in three parameters. Where the left elevator is, where the right elevator is, where the elevator is "called". These are integers between 0-2


//R: Return which elevator will be the name (string) of the elevator closest to the call floor. If they are both equadistant return 'right'


//E: (0, 2, 1) --> left
//   (1, 1, 2) --> right
//   (2, 1, 2) --> left


//P: Takes in the three parameters. Create a conditional of some type. If abosolute difference between left and call is less than absolute difference between right and call return 'left' else return right.



function elevator(left, right, call){
  if((Math.abs(left-call))<(Math.abs(right-call))){
     return 'left'
  }else{
    return 'right'
  }
}