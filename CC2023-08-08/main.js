// What's the real floor?

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3


// function getRealFloor(n) {
// }

//PREP
// Takes in a positive or negative integer. It could also be zero.
// Will return an integer. If it is a negative number or zero return as is. If it is positive between 1-13 remove 1 and return. If above 13 remove 2 and return.
// console.log(getRealFloor(-2), -2);
// console.log(getRealFloor(0), 0);
// console.log(getRealFloor(18), 15);
//
//Take in number and use a conditional for nums 0 and less, 1-13, 13+ and return the appropriate number based on the num introduced.


const getRealFloor = (n) => {
  if(n<=0){
    return n
  }else if(n<=13){
    return n-1
  }else{
    return n-2
  }
}