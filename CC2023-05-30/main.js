// Pillars

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// function pillars(numPill, dist, width) {
//   // your code here
// }


//P: Takes in 3 integers. Number of pillars (> or equal to 1), Distance between the pillars (10-30) in meters, and Width of pillars (10-50) in centimeters. 

//R: Return the distance between the first and last pillar without the first and last pillar widths. This should be a number in centimeters.

//E: (0, 0, 15) --> 0
//   (2, 15, 10)  --> 1500
//   (5, 10, 10)  --> 430

//P: Take in parameters. multiply width by numbers of pillars (after subtracting 2 for first and last), multiply distance between by number of pillars (after subtracting one as not accounting for after the last pillar), multiply distance calculation by 100 to convert to cm. If pillars is greater than one return the sum of the two calculation, if only one pillar return 0/.

const pillars = (n, d, w) => n === 1 ? 0 : w*(n-2) + 100*(d*(n-1))

