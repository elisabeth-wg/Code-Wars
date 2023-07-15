// Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

//PREP
//Takes in a string. Could have letters, numbers and spaces. Could have upper and lower case.
//Return true if it is palindrome after removing spaces, punctuation, non-alphanumeric characters and capitalization. Return false if not a palindrome after removing those mentioned above.
//('raceCar!?&') --> true
//('racing Car') --> false
//(' ') --> true


var isPalindrome = function (s) {
    let phrase = formatString(s);

    let i = 0;
    let j = phrase.length - 1;

    while (i < j) {
        if (phrase[i] !== phrase[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
};

function formatString(s) {
    let res = "";
    for (let char of s) {
        if (char === " ") continue;

        let lower = char.toLowerCase();
        let upper = char.toUpperCase();
		// add if it's a number or a letter
        if (!isNaN(char) || lower !== upper) {
            res += lower;
        }
    }
    return res;


console.log(isPalindrome(('raceCar!?&'), true))
console.log(isPalindrome(('racing Car'), false))
console.log(isPalindrome((' '), true))