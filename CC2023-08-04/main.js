// They say that only the name is long enough to attract attention.They also said that only a simple Kata will have someone to solve it.This is a sadly story #1: Are they opposite ?

// Task
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// Examples (input -> output)
// "ab","AB"     -> true
// "aB","Ab"     -> true
// "aBcd","AbCD" -> true
// "AB","Ab"     -> false
// "",""         -> false

// function isOpposite(s1,s2){
//   //coding here...
  
// }

//PREP
// Takes in two strings which will include only letters or is empty.
// Return the boolean true or false. If the letters are the same but the casing is opposite return true. If not return false. If empty return false.
// console.log(isOpposite("ab","AB") , true);
// console.log(isOpposite("ab","ab") , false);
// console.log(isOpposite("","") , false);
//
// Take in the two strings and split both into arrays. Loop through the first. switch the case of each element. compare to the other string and if the same return true else return false. If empty return false. 

function isOpposite(s1,s2){
  let newStr = '';
  if(s1.length == 0 && s2.length == 0) return false;
  for(let i = 0; i < s1.length; i++){
    s1[i] === s1[i].toUpperCase() ? newStr += s1[i].toLowerCase() : newStr += s1[i].toUpperCase(); 
  }
  return newStr === s2;
}