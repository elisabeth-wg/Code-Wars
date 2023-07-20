// I love you, a little, a lot, passionately ... not at all

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

// function howMuchILoveYou(nbPetals) {
//     // your code
// }

//PREP:
//Will receive a positive integer
//Will return one of the phrases based on the number of the last petal.
//([4] --> 'passionately')
//1 luv you 7 13 19 /6 r1
//2 little 8 14 20 /6 r2
//3 lot 9 15 21 /6 r3
//4 passion 10 16 22 /6 r4
//5 madly 11 17 23 /6 r5
//6 not 12 18 24 /6 r6
//Take in the number and find the modulus of 6. depending the remainder return one of the statements which will be saved in a switch case.


function howMuchILoveYou(nbPetals) {
   let petalId = nbPetals%6
  switch (petalId) {
   case 1:
    return 'I love you';
    break;
   case 2:
    return 'a little';
    break;
   case 3:
    return 'a lot';
    break;
   case 4:
    return 'passionately';
    break;
   case 5:
    return 'madly';
    break;
   case 0:
    return 'not at all';
    break;
  }  
}


console.log(howMuchILoveYou(7),"I love you")
console.log(howMuchILoveYou(3),"a lot")
console.log(howMuchILoveYou(6),"not at all")
