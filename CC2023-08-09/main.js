// Sum of Multiples

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// function sumMul(n,m){
// //your idea here
// }

//PREP
// Takes in two integers. Could be positive, zero, or negative.
// Return a number which is the sum of all of the multiples of the first number as long as they are less than the second number (the multiple). If the second number is either 0 or negative, return "INVALID"
// console.log(sumMul(0,0),"INVALID");
// console.log(sumMul(2,9),20);
// console.log(sumMul(4,-7),"INVALID");
//
// Take in the two numbers. Created a counter variable. If the second number is zero or negative return "INVALID". Then create a loop and add to the variable until the multiple is as large as the second number. Then return the variable.

function sumMul(n,m){
  let sum = 0
  if(m<=0){
    return "INVALID"
  }else{
    for(let i = 0; i*n<m; i++){
      sum += i*n
    }
  }
  return sum
}
