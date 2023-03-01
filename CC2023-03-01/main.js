
// Grasshopper - Grade book

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


function getGrade (s1, s2, s3) {
  let average = (s1+s2+s3)/3
  if(average>=90){
    return 'A'
  }else if(average>=80){
    return 'B'
  }else if(average>=70){
    return 'C'
  }else if(average>=60){
    return 'D'
  }else{
    return 'F'
  }
}

//P: Three numbers passed in between 0-100
   
//R: Return a letter ('A','B','C','D','F')
  
//E: (99, 89, 100, 'A'), (72,78,80, 'C'), (20, 61, 10, 'F')
  
//P: Take in three numbers, find average, use conditional to return correct grade