// Drink about

// DESCRIPTION:
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"


// function peopleWithAgeDrink(old) {
//   return '';
// };


//P: Takes in a number. No other info available from instructions or tests. Presuming to be greater than zero.  

//R: Return what someone from that age range would drink: toddy, coke, beer, whisky

//E: (13 --> toddy), (33 --> whisky), (15 --> coke)

//P: Take in age/number parameter. Make a conditional or switch case and return what that aged person would drink. 

function peopleWithAgeDrink(old) {
  if(old < 14) return 'drink toddy';
  if(old < 18) return 'drink coke';
  if(old < 21) return 'drink beer';
  if(old >= 21) return 'drink whisky';
  else return 'drink whisky';
};