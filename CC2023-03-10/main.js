// Cat years, Dog years

// DESCRIPTION:

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// References

// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
// http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html

// var humanYearsCatYearsDogYears = function(humanYears) {
//   // Your code here!
//   return [0,0,0];
// }


// var humanYearsCatYearsDogYears = function(humanYears) {
//   // Your code here!
//   return [0,0,0];
// }

//P: Take in a number in human years, only whole numbers, greater than 1

//R: return an array with human years, cat years, and dog years

//E: (2, [2,24,24]), (1, [1,15,15]), (8, [8,48,54])

//P: Take in number a parameter, create an array, push to array after each calculation,
//return array


function humanYearsCatYearsDogYears(humanYears) {
  let catYears = 0
  let dogYears = 0
    if(humanYears === 1){
      catYears += 15
      dogYears += 15
    }else if(humanYears === 2){
      catYears += (15+9)
      dogYears += (15+9)
    }else if(humanYears >= 3){
      catYears +=  (24 + (humanYears-2)*4)
      dogYears +=  (24 + (humanYears-2)*5)
    }
  let ageArr = [humanYears, catYears, dogYears]
  return ageArr;
}