// Isograms

// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

//function isIsogram(str){
  //...
//}

//P: Takes in a string that is only letters. Letter casing doesn't matter. An empty string could be passed in and will be considered an isogram (no repeating letters).

//R: Return true (is an isogram) or false (is not an isogram) depending on the string.

//E: ('geese' -> false)
//   ('hello' -> false)
//   ('hi' -> true)

//P: Take in the string and loop through the letters. For each map and create a new array with the number of occurances of that letter. *A nested array. Then return false if any has a value greater than 1 or if it is empty. Otherwise return true.

function isIsogram(str){
  let i, j;
  str = str.toLowerCase(); 
   for(i = 0; i < str.length; i++) {
    for(j = i + 1; j < str.length; j++) {
      if(str[i] === str[j]) {
        return false;
        }
      }
     }
  return true;
}
