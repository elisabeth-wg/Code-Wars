
// Did she say hallo ?

// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

// function validateHello(greetings) {
//   res =  //regex here/.test(greetings) 
//   return res
// }


//P: Takes in a string

//R: Returns a boolean - true if the message includes one of the hello's and false if not. Caps insensitive and string can contain other letters in addition.

//E: ('hola' --> true), ('Hayyy' --> false), ('biblioteca' --> false)

//P: Takes in a string. Seems to use regex as it calls for regex here in the solution base code. Will attempt to use a method before regex if possible. Take in string. Utilize a method to check for each option. Could possibly use indexOf method. Return Boolean if word from list is included else false. 


function validateHello(greetings) {
    greetings = greetings.toLowerCase()
    if(greetings.indexOf('hello') > -1) {
     return true
    } else if(greetings.indexOf('ciao') > -1) {
     return true
    } else if(greetings.indexOf('salut') > -1) {
     return true
    } else if(greetings.indexOf('hallo') > -1) {
     return true
    } else if(greetings.indexOf('hola') > -1) {
     return true
    } else if(greetings.indexOf('ahoj') > -1) {
     return true
    } else if(greetings.indexOf('czesc') > -1) {
     return true
    } else {
      return false
    }
}

//next given time, refactor with switch case