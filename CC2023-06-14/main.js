// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//P: An array of positive and negative integers.

//R: Return a number which is the sum of the positive elements or zero if none.

//E: ([2,3,-1,-4] --> 5)
//   ([-10, 30, 10, -30] --> 40)
//   ([-3,-5,-1] --> 0)


//P: Take in array and filter the positive numbers then use reduce to get the sum. Last, return the sum.

function positiveSum(arr) {
  let posArr = arr.filter((el) => el > 0)
  if(posArr.length > 0){
    return posArr.reduce((total, item) => total + item)
  }else{
    return 0
  }
}