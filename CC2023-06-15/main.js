// Convert number to reversed array of digits

// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// function digitize(n) {
//   //code here
// }

//P: Takes in a non-negaitve integer (could be zero)


//R: Return an array with each number seperated and in reverse order.


//E: (321 --> [1,2,3])
//   (0 -- [0])
//   (4567 --> [7,6,5,4])


//P: Take in number as parameter. Split number into an array. Reverse the array. Use map to turn each back into a number and return.

const digitize = (n) => {
  let newArr = n.toString().split('').reverse();
  let arrNums = newArr.map(Number)
  return arrNums
}