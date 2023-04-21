// Grasshopper - Basic Function Fixer

// DESCRIPTION:
// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

// function addFive(num) {
//   var total = num + 5
//   return num
// }

//P: Takes in a number as a parameter. Can be positive, negative or zero.


//R: Should return the number plus 5


//E: (3 --> 8), (0 --> 5), (12 --> 17)


//P: Examine the current code for errors as it is returning the wrong number. Make sure that it has the proper variables (not depricated), make sure the number/parameter is entered correctly and follows through the function properly. *It appears the num (parameter) is being returned versus the total which should be returned. I will refactor as well.

const addFive = (num) => num + 5