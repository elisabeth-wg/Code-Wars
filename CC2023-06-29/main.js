// Define a card suit

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
//     ('3♠') -> return 'spades'

// function defineSuit(card) {
//   // good luck
// }

//P: Takes in an argument that is a string with card number/letter and suit symbol.

//R: Return the name of the suit as a string written in lowercase letters

//E: ('4♣') -> 'clubs'
//   ('8♥') -> 'hearts'
//   ('Q♠') -> 'spades'

//P: Take in the string and use conditional to return the string depending on the symbol in the last space of the string. 

const defineSuit = card => ({
  '♣': 'clubs',
  '♦': 'diamonds',
  '♥': 'hearts',
  '♠': 'spades'
})[card.slice(-1)]