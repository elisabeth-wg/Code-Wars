// Regular Ball Super Ball

// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

// var Ball = function(ballType) {
//   // your code goes here
// };

//P: Takes in one parameter which is a string. It may also be empty. 

//R: We are not to return anything, perhaps the property of ballType if it doesn't pass as is. ballType should be set according to the parameter passed in. If it is empty it should be set to regular. 

//E: ('small' --> 'small'), ('medium' --> 'medium'), (  --> 'regular')

//P: Create the class Ball with a ballType of parameter or 'regular'. return the ballType property if needed. 

const Ball = class {
  constructor(ballType = 'regular') {
    this.ballType = ballType;
  }
};

