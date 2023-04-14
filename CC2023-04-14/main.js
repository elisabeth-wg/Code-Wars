
// Is it even ?

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// function testEven(n) {
//     //Your awesome code here!
// }

//P: Can take in parameters of any type of number (pos or neg, int or float)

//R: Return true or false, decimals that are not zero are considered not even for this one

//E: (6 --> true) (3.5 --> false) (-4 --> true)

//P: Take in number and use modulus to see if it is even. Take the decimal into account. Return true or false. 

//didn't have time to refactor this one

function testEven(n) {
    if(Number.isInteger(n)){
      if(n % 2 === 0 || n === 0){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
}