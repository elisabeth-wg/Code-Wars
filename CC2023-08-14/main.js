// Grasshopper - Messi goals function
    
// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17


// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   // code goes here
// }


//PREP:
//Takes in three "valid" numbers, in this case the number of goals which could then be 0 or more.
//Returns the sum of the three numbers
// console.log(goals(43, 10, 5), 58);
// console.log(goals(0, 0, 0), 0);
// console.log(goals(0, 10, 13), 23);
// Take in the three numbers and return their sum.

const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals