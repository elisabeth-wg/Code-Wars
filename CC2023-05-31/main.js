// Draw stairs

// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I
      
// function drawStairs(n) {
//   // your code here
// }



//P: Takes in a positive integer, n.


//R: Returns ascii art which corresponds to n using 'I' as stairs. The 'stairs' start from the left and move down to the right. 


//E: (3) I
//        I
//         I

//   (1)  I

//   (4)  I
//         I
//          I
//           I  

//P: Take in the parameter n. Created a variable. Created a loop adding 'I's and \n's as appropriate. The last I doesn't have a paired \n.


// function drawStairs(n) {
//   // your code here
// }


drawStairs = n => [...Array(n)].map((_,index) => ' '.repeat(index) + 'I').join('\n')