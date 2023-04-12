// Find the next perfect square!

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

//     Examples: (Input-- > Output)

//     121 --> 144
// 625 --> 676
// 114 -- > -1 since 114 is not a perfect square

// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise
//   return -1;
// }

//P: Parameter is a non-negative integer.   

//R: Return the next perfect square or -1 if the parameter itself is not a perfect square.  

//E: (36 --> 49), (144 --> 169), (168 --> -1)

//P: Take in argument. Find it's square root, then square that number after 1 has been added to it. If parameter is not a perfect sq return -1 else return the new perfect sq.

const findNextSquare = (sq) => Math.sqrt(sq) === Math.floor(Math.sqrt(sq)) ? Math.pow((Math.sqrt(sq)+1),2) : -1

