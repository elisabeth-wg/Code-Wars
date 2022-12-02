// Grasshopper - Debug sayHello
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock




function sayHello(name) {
  return `Hello, ${name}`
}




//P: Will it always be a string? There will be spaces and punctuation. 


//R: Return 'Hello, name'

//E: If given 'Jane' return 'Hello, Jane'
//      If given 'Ms. Doe' return 'Hello, Ms. Doe'
//      If given 'John Doe' return 'Hello, John Doe'
//P: Take in name and return `Hello, ${name}`