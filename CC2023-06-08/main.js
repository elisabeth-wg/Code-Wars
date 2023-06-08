// String repeat

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//P: Take in a positive integer (n). Takes in a string (s).

//R: Returns the string repeated n times. 

//E: ('Hi', 3) --> 'HiHiHi'
//   ('La', 4) --> 'LaLaLaLa'
//   ('bub', 5)--> 'bubbubbubbubbub'

//P: Take in the string and integer as parameters. Use the repeat method to repeat the string, n times. Return the new string. 

const repeatStr = (n, s) => s.repeat(n)


