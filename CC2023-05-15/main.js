// Area of a Square

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// function squareArea(A){
  
// }

//P: Takes in one number as a parameter. Seemingly a positive number which represents the arc through a square. 

//R: Return the area of the square as a number with only two decimal points (round if needed)

//E: (2, --> 1.62) (3, --> 3.65) (6, --> 14.61)

//P: Take in the number for the arc. Figure out the maths. Apply the expression to the number and return the area of the square as a number rounded to two decimal places: (( arc * 4 / 3.14 ) ^2 )/ 4

const squareArea = (A) => ((A * 4 / Math.PI) ** 2)/4 ;



