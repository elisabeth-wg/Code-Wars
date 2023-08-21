// Is this a triangle?

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


// function isTriangle(a,b,c)
// {
//    return false;
// }


//PREP:
//Given three positive integers
//Return a boolean
// console.log(isTriangle(1,2,2), true);
// console.log(isTriangle(7,2,2), false);
// console.log(isTriangle(), true);
//Take in three numbers and write a conditional or ternary operator with the three needed equations. If all are true return true else return false. The equations take two nums and make sure they are less than the third num. Each num is checked as the sum.

const isTriangle = (a,b,c) => (a+b>c && a+c>b && b+c>a)