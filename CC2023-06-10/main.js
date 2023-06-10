// Name on billboard

// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong - Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600(Space counts as a character).

// function billboard(name, price = 30){

// }


//P: Takes in a string as a parameter. Can also take in a second parameter which is the price. The default price is 30.


//R: Return a number which is the price times the number of characters in the string (including spaces). 


//E: ('Elisabeth Wolden', 10) --> 160
//   ('Me Jones') --> 240
//   ('Jane Doe', 20) --> 160


//P: Take in parameter of string and possibly a num. Set default parameter as 30. Since we can't use the * to mulitply....create a loop with a counter and add the number for the number of times it iterates when it runs for the length of the string. 


function billboard(name, price = 30){
  let cost = 0
  for(let i = 1; i <= name.length; i++){
    cost = cost+price
  }
  return cost
} 