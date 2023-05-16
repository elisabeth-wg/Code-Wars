// function remove (string) {
//   //coding and coding....
//   return '';
// }

//P: Takes in a string, most with an exclamation mark at the end. Some do not have an
//exclamation point at the end.

//R: Return a string without the exclamation mark on the end if there is one

//E: ("Hi!" --> "Hi")
//   ("!Hello!" --> "!Hello")
//   ("Hel!lo!" --> "Hel!lo")

//P: Take in string. Make the string an array. Pop off the last element if an exclamation point and return. 

function remove (string) {
  let arr = string.split('')
  if(arr[arr.length-1] === "!") {
    arr.pop()
  }
  let noEndExclamation = arr.join('')
  return noEndExclamation;
}
