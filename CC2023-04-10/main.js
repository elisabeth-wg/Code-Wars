// Find out whether the shape is a cube

// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

// var cubeChecker = function(volume, side){
//   return false;
// };

//P: Takes in two integers - the first the total volume and the second one of the side dimensions. Some could be negative.      

//R: Return true if the cuboid could have equals sides, return false if it could not have equal sides or if the side is a negative number. 

//E: (0, 0 --> false), (18, 3 --> true), (-1, 3 --> false)

//P: Take in two parameters. Create a conditional. If the the first integer equals the second cubed return true, else return false. 

//needs to be refactored a bit

const cubeChecker = (volume, side) => {
  if(volume <= 0 || side <= 0){
    return false
  }else if(volume === Math.pow(side, 3)){
    return true
  }else{
    return false
  }
}