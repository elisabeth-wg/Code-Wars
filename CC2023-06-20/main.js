// Don't give me five!

// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number.Both numbers can be also negative!

// function dontGiveMeFive(start, end)
// {
//   return 0;
// }


//P: Takes in two numbers with the first being less than the second. Can be negative numbers.

//R: Return the amount of number of numbers between the two given numbers (including them), but do not count any numbers with 5 in them.

//E: (1,3) -> 3
//   (-1, 5) -> 7
//   (3, 18) -> 14


//P: Larger subtract the smaller+1. Divide by 5. Remove for each each one set of 5.

const dontGiveMeFive = (start, end) => {
  let results = 0
  for(let i=start; i <= end; i++){
    const numArr = i.toString().split('')
    const fiveCounts = numArr.filter(digit => digit == '5').length
    if(fiveCounts == 0) {
      results++
    }
  }
  return results
}  