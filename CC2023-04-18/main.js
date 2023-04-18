// Printer Errors

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"


// function printerError(s) {
//     // your code
// }


//P: Takes in a string greater or equal to 1. It has only letters a - z. No capital letters. 

//R: Return a fraction with the numerator being the amount of errors and the demoninator the total length of the string. This should be returned as a string.

//E: ('aaamm' --> '0/5'), ('bbbcccdez' --> '1/9'), ('ppqqabc' --> '4/7')

//P: Take in string, turn to array with split, map a new array pushing ++ each time a error letter is found. after iterating through add a slash to the array as well as the orignal array length. join into a string and return.

const printerError = (s) => {
  const result = (s.split('')).filter(x => x !== 'a' && x !== 'b' && x !== 'c' && x !== 'd' &&
      x !== 'e' && x !== 'f' && x !== 'g' && x !== 'h' && x !== 'i' && x !== 'j' && x !== 'k' && x !== 'l' && x !== 'm') 

  let fraction = `${result.length}/${s.length}`
  return fraction
}




