// Palindrome Number

// Given an integer x, return true if x is a
// palindrome
//     , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?

// var isPalindrome = function(x) {
    
// };

//PREP:
//Takes in an integer, could be positive or negative.
//Return true if the integer is a palindrome and false if it is not.
//(678 --> false)
//(79997 --> true)
//(-100000000000001 --> false) --the negative would be on the other end when reversed.
//

console.log(isPalindrome(678), false)
console.log(isPalindrome(79997), true)
console.log(isPalindrome(-100000000000001), false)



var isPalindrome = function(x) {
  const isNegative = x< 0 ? true : false;
    
  if (isNegative){
      return false;
  }
    
  const temp = x;
  let reversed = 0;
    
  while(x>0){
      reversed = (reversed * 10) + (x%10);
      x = parseInt(x/10);
  }
    
  return reversed == temp;
};

//If neg return false. Create a variable to hold initial num. Run loop to reverse num (to avoid changing it to a string).
//While x is greater than zero we will move the numbers over to the temp variable. We do this by making a space (multiplying by 10) and adding on the remainder each time. At the same time dividing the x by 10 and removing the remainder (by rounding down) Once complete the number will reside in reverse in the temp and the x will be 0. Temp will be compared to original x to see if they are equal. 
