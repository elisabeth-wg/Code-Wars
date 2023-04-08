
// String Templates - Bug Fixing #5

// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

// function buildString(...template){
//   return `I like #{template.join(',')}!`;
// }

//P: Takes in one or more strings. 

//R: Returns the string with a template literal - one given is incorrect and needs to be fixed. 

//E: ('Candy', 'Iced Tea') --> 'I like Candy, Iced Tea!'
// ('Coffee') --> 'I like Coffee!'
// ('Chocoloate', 'Wine', 'Cheese') --> 'I like Chocolate, Wine, Cheese'

//P: Take in correct strings , make sure template literal is working correctly for one or multiple strings. return string. --Had to change the # to a $ and add a space after the comma. 

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}