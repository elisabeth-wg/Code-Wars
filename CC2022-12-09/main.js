// Is it a Palindrome?
// Description
// Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
  x = x.toLowerCase()
  let rev = x.split("").reverse().join("")
  return (x === rev)
}