// Switcheroo

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// function switcheroo(x){

// }

//P: Takes in a string with the only the letters a, b, and/or c.

//R: Return the string with the a's changed to b's and the b's changed to a's. c's remain as the were brought into the function.

//E: ('bbaac' --> 'aabbc')
//   ('cacab' --> 'cbcba')
//   ('bbbaaa' --> 'aaabbb')

//P: Take in the string. Split the string into an array. Iterate through the array replacing a with b and b with a. Join the array into a string and return.

function switcheroo(x){
  return x.split('').map(function(e){
    if (e =='b')return 'a';
    if (e == 'a') return 'b';
    if(e=='c') return 'c'
  }).join('');
}

// const switcheroo = x => x.replace(/[ab]/g, element => element === 'a'? 'b': 'a')