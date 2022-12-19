// Remove exclamation marks
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//  const noExclamationArr = s.split("")
//  noExclamationArr.forEach((element, index, arr) => {
//    if(element === "!") {
//      arr.splice(index,[1])
//    } 
//  }) 
//  const noExclamation = noExclamationArr.join(""); 
//  return noExclamation
// }

function removeExclamationMarks(s) {
 const noExclamationArr = s.split("")
  noExclamationArr.forEach((element, index, arr) => {   
    if(element === "!") {
      delete noExclamationArr[index]
    } 
  })  
 const noExclamation = noExclamationArr.join(""); 
 return noExclamation
}