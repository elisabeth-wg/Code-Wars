// Well of Ideas - Easy Version

// DESCRIPTION:
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


// function well(x){

// }

//P: Takes in an array with stings that are either 'good' or 'bad'

//R: Return 'Publish!' if there are one or two 'good'. Return 'I smell a series!' if more than 2 'good. If no 'good' return 'Fail!'

//E: (['bad', 'bad'] --> 'Fail!'), (['good,'bad', 'bad'] --> 'Publish!'), (['good','bad', 'bad', 'good', 'good'] --> 'I smell a series!')

//P: Take in array. create a 'good' variable. Iterate through the array and add to the variable for each 'good'. Create a conditional to return the appropriate message based on the number of 'good's tallied in the variable. 

function well(x){
 let goods = 0
 x.forEach(e => {
  if(e === 'good'){
    goods++
  }
 })
 if(goods > 2){
   return 'I smell a series!'
 }else if(goods > 0){
   return 'Publish!'
 }else{
   return 'Fail!'
 }
}