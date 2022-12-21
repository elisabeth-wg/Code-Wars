// Square Every Digit- 7kyu

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


// function squareDigits(num){
//   return 0;
// }



// function squareDigits(num){
//   const arr = Array.from(num.toString());
//   console.log(arr)
//   arr.forEach((element) => {
//     element = Number(element)
//     })
//   console.log(arr)
// }

function squareDigits(num){
  const arr = Array.from(num.toString());
  const newArr = arr.map((element) => Math.pow((Number(element)), 2))
  const number = Number(newArr.join(""))
  return number
}