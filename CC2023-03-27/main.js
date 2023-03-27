
// Volume of a Cuboid

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     // your code here
//   }
// }

//P: Not much info given. From examples in tests it appears only positive integers will be introduced as parameters

//R: Returnt the volume as a integer

//E: (1,3,3 --> 9), (10, 50, 1 -> 500), (4, 5, 2 --> 40)

//P: Take in the three integers and multiply all three together. Return the integer. 


// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     // your code here
//   }
// }

// const Kata = (n1, n2, m3) => n1*n2*n3


class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}
