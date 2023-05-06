// Number of People in the Bus

// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.


// var number = function(busStops){
//   // Good Luck!
// }


//P: Takes in an array with 2 numbers per element as an array. First the number of people who get on
//and second the number of people who get off. 


//R: Return the number of people left on the bus at the end. Will always be greater
//or equal to zero. Return will be positive


//E: ([[3,0], [2,2], [5,4]] --> 4)
//([[10,0], [2,3] --> 9])
//([[1,0], [5,3], [3,1]] --> 5)


//P: Take in the array. Need to decide whether to do each array alone and then add up
//or add all [0] and subtract all [1]. Then return the amount left. Decided I will try the first way
//Use start a counter variable. Start a forEach loop and subtract [1] from [0].
//Add the remainder to the counter and return after loop.


function number(busStops){
  let count = 0
  busStops.forEach((e, i) => {
    count = count + (e[0] - e[1])
  });
  return count
}