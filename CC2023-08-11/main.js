// Return to Sanity

// This function should return an object, but it's not doing what's intended.What's wrong?

// function mystery() {
//   var results =
//     {sanity: 'Hello'};
//   return
//     results;
// }

//PREP
//Examine the function and determine what is not functioning correctly.
//It should return an object.
//{sanity: 'Hello'}
//Examine the function. Look up proper creating of objects and returning.
//Noted that the return and object were not on the same line. This corrected the error.

function mystery() {
  var results =
    {sanity: 'Hello'};
  return results;
}