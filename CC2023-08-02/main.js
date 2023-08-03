// Plural

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

// function plural(n) {
//   // ...
// }

//PREP
//  Takes in a number. Is positive. Could be a float or zero.
//  Return true or false depending on if a plural is needed or not.

// console.log(plural(0.25), true, "Plural for 0.25");
// console.log(plural(1), false, "Plural for 1");
// console.log(plural(0), true, "Plural for 0");

//  Take in the num and create a conditional with ternary operator. If one false, else true. Return the boolean.

function plural(n) {
    if (n === 1) {
        return false
    } else {
        return true
    }
}

refactored

const plural = (n) => n === 1 ? false : true;