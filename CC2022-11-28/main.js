// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//P: Will it be always given as an integer? Not as an array? No decimals?
//R: Return an array where the numbers are returned individually in reverse order
//E: given 321 I will return [1, 2, 3]
//   given 5634 I will return [4,3,6,5]
//   givem 11235 I will return [5,3,2,1,1]
//P: Take in the integer
//make the number a string
//make the string an array
//create an empty array
//iterate through each array elemnt and unshift it onto an array as a number
//return the array



function digitize(n) {
    n = (n).toString()
    let strArr = n.split('');
    let newArr = []
    strArr.forEach(function (element){ 
      newArr.unshift(Number(element)) 
    }) 
    return newArr
  }
