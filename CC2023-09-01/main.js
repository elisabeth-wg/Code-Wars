// Enumerable Magic - Does My List Include This?

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//PREP:
// Takes in an array and a single element. Examples seem to be numerals.
// Returns true if the item is part of the array. Otherwise returns false.

// console.log(include([1,2,3,4], 3), true )
// console.log(include([1,2,4,5], 3), false)
// console.log(include([], 3),        false)

// Use .includes() method to check if the item is part of the array and returns true if so, otherwise returns false.

const include = (arr, item) => arr.includes(item) ? true : false ; 