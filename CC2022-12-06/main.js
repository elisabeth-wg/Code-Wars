function isVow(arr){
  arr.forEach((e, i) => {
    if(e === 97 || e === 101 || e === 105 || e === 111 || e === 117) {
      arr.splice(i, 1, (String.fromCharCode(e)));
    }
  })
  return arr
}


//Is there a vowel in there?

//Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


