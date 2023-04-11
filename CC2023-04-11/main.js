// Grasshopper - If/else syntax debug

// If/else syntax debug
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between - 10 and 10.

// function checkAlive (health) {
//   if () {
//     health < 0
//     return false
//   } else () {
//     return true
//   }
// }

//P: Looking at the function as it is already written       

//R: Fix errors in function

//E: If an error exists remove it   

//P: At first glance it the condiional parentheses are empty or in the wrong places. The else statement shouldn't have parentheses. The returns are also backwards and need to be flipped.

// function checkAlive (health) {
//   if (health > 0) {
//     return true
//   } else{
//     return false
//   }
// }

//refactored

const checkAlive = (health) => health > 0 ? true : false