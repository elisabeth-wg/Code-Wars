// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.




//P: only strings, never empty, 
 
//R: return length of shortest word

//E: ('what is your favorite', returns 2) ('is it cold outside', returns 2) ('elephants are smart', returns 3)

//P:  take in string
    //search through for the shortest word perhaps comparing it to the one after it almost like filter, sort?
    //seems sort on an array will work. Need to then split to an array then sort 
    //return the length the found shortest word

function findShort(s){
  const arr = s.split(' ')
  const sorted = arr.sort((a, b) => (a.length) - (b.length));
  return (sorted[0].length)
}