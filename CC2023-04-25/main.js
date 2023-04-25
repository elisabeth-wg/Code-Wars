// Do you speak "English" ?

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

// function spEng(sentence){
// //write your code here
// }

//P: Takes in a string with any ascii characters.

//R: Returns a boolean of true or false depending on if the string contains the letters "english" in any casing. Letters must be in a row and in order.

//E: ('abecenglish' --> true), ('abenglhsi' --> false), ('EnGlIsh456tg' --> true)

//P: Take in the string and convert it all to lower case. Then check for if it includes 'english'. If yes return turn if no return false'


const spEng = (sentence) => sentence.toLowerCase().includes('english') ? true : false;



