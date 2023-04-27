// Multiplication table for number

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

// function multiTable(number) {
//   // good luck
// }


//P: Takes in a number from 1-10

//R: return a table that is a string with a new line for each equation. No space at the end after the last equation however. 

//E: (2 --> each line 1 * 2 = 2.... through 10 * 2 = 20), 
//(4 -- > each line 1 * 4 = 4.... through 10 * 4 = 40)
//(2 --> each line 1 * 8 = 8.... through 10 * 8 = 80)

//P: take in the parameter and plug it into a loop with a conditional inside. For first loops (1-9) add a space after. For last loop no space. Return string.

function multiTable(m) {
  let table = ``
  for (let i = 1; i < 10; i++){
    table = table + `${i} * ${m} = ${(i * m)}\n`
  }
  table = table + `10 * ${m} = ${(10*m)}`
  console.log(table)
  return table
}

