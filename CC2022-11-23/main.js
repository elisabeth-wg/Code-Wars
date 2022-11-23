// Twice as old

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
}


function twiceAsOld(dadYearsOld, sonYearsOld) {
  if(sonYearsOld === 0){
      return dadYearsOld
    }
  for(let i = 0; i < sonYearsOld; i++){
    if((dadYearsOld-i)/2 === sonYearsOld-i){
      return i
    }else{
      for(let j = 0; j < 100; j++){
        if((dadYearsOld+j)/2 === sonYearsOld+j){
          return j
        }
      }
    }
  }
}
