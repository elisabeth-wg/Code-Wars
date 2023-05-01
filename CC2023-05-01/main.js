
// Remove the time

// DESCRIPTION:
// Task Description
// You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function that takes the website date/time in its original string format and returns the shortened format.

// Input
// Input will always be a string, e.g., "Friday May 2, 7pm". 

// Output
// Output will be the shortened string, e.g., "Friday May 2".

// function shortenToDate(longDate) {
//   // your code here
// }

//P: Takes in string with weekday month date, time.     

//R: Return without the comma and time as a string.

//E: ('Friday June 2, 6pm' --> 'Friday June 2')
//   ('Tuesday August 29, 3am' --> 'Tuesday August 29')
//   ('Sunday May 17, 9am' --> 'Sunday May 17')

//P: Take in the string parameter. Split into an array and pop off the end element (time), also remove the comma with pop or find and remove it with a method. 


function shortenToDate(longDate) {
  const longDatedArr = longDate.split(',')
  longDatedArr.pop()
  let shortDate = longDatedArr.join()
  return shortDate
}