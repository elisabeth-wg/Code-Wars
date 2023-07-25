// Triple Trouble

// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

// function tripleTrouble(one, two, three){
//   //Solution
//  }

//PREP:
//Takes in three strings. all letters, no nums, no chars. They are all the same length.
//Return a string that first takes all of the first letters, then all of the second, third etc and combines them.
//['hlod' , 'eord', 'lwld' ] -> 'helloworlddd'
//['gb','ol','be'] -> 'gobble'
//['zzz','zzz','zzz'] -> 'zzzzzzzzz'
//Take in the three strings. Create a loop grabbing each index and pushing to a new string. Return that string.


console.log(tripleTrouble('hlod' , 'eord', 'lwld'), 'helloworlddd');
console.log(tripleTrouble('gb','ol','be'), 'gobble');
console.log(tripleTrouble('zzz','zzz','zzz'), 'zzzzzzzzz');


function tripleTrouble(one, two, three){
  newStr = ''
  for(let i = 0; i < one.length; i++){
    newStr += one[i] + two[i] + three[i]
  }
  return newStr
 }