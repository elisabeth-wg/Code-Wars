// Welcome to the City

// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// function sayHello( name, city, state ) {
// }

//P: Takes in a full-name as an array (can have two last names etc), a city name and a state name. These are all strings

//R: Returns a string that says 'Hello, name! Welcome to city, state!'

//E: ([Elisabeth, Wolden], 'Minneapolis', 'Minnesota) --> 'Hello, Elisabeth Wolden! Welcome to Minneapolis, Minnesota!'

//P: Take in parameters. Create a template literal and return the string with the elements placed as they should be. 

const sayHello = (name, city, state) => {
  if(name[3] != undefined){
    return `Hello, ${name[0]} ${name[1]} ${name[2]} ${name[3]}! Welcome to ${city}, ${state}!`
  }
  else if(name[2] !=undefined){
    return `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!`
  }else {
    return `Hello, ${name[0]} ${name[1]}! Welcome to ${city}, ${state}!`
  }
}