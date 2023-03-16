
// Price of Mangoes

// DESCRIPTION:
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

function mango(quantity, price){

}

//P: Takes in a number of mangos and the current price for the mangos. All pos int.

//R: Return the price as an integer

//E: (2, 3) --> 6 (no mangos free), (12, 3) --> 24 (4 free mangos), (1, 5) --> 5 (no mangos free)

//P: Take in number of mangos and price. Create a counter. Multiply quantity times price. subtract Math.floor(quantity/3) to get the discount of on free per three. Use Math.floor to find the groups of 3 and price for all before the discount. Return after maths to counter. 



// function mango(quantity, price){
//   let totalPrice = 0
//   totalPrice = quantity*price
//   let setsOfThree = Math.floor(quantity/3)
//   totalPrice -= (setsOfThree*price)
//   return totalPrice
// }

//refactored to Codewars liking

const mango = (quantity, price) => (quantity*price)-((Math.floor(quantity/3))*price)
