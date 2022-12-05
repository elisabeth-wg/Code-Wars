// Third Angle of a Triangle

// DESCRIPTION:
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
    let sumOfTwoAngles = a + b;
    let thirdAngle = 180 - sumOfTwoAngles;
    return thirdAngle
}

//shorter version
//function otherAngle(a, b){
//     return 180-(a+b);
// }