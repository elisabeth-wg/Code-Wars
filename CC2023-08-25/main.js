// Remove anchor from URL

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -- > "www.codewars.com?page=1"

// function removeUrlAnchor(url){
//   // TODO: complete
// }

//PREP:
// Takes in the a string
// Returns the string which is a URL without anything after the  "#" if one exists.
// console.log('www.codewars.com#about'), 'www.codewars.com';
// console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1');
// console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/');

//Use indexOf to find the "#" if it exists. The use slice method to remove anything after the index of the "#". Return.

const removeUrlAnchor = (url) => url.indexOf('#') != -1 ? url.slice(0, url.indexOf('#')) : url