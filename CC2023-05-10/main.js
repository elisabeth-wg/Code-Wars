// Switch / Case - Bug Fixing #6

// Switch/Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work.He uses Switch / Cases to evaluate the given properties of an object, can you fix timmy's function?

// function evalObject(value){
//   var result = 0;
//   switch(value.operation){
//     case'+': result = value.a + value.b;
//     case'-': result = value.a - value.b;
//     case'/': result = value.a / value.b;
//     case'*': result = value.a * value.b;
//     case'%': result = value.a % value.b;
//     case'^': result = Math.pow(value.a, value.b);
//   }
//   return result;
// }

//P: value 

//R: result

//E: Given a switch case with an error/errors. It should run properly and return the result

//P: I will check that the switch case as the correct breaks. I will make sure that the syntax is correct. 

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
    break;
    case'-': result = value.a - value.b;
    break;
    case'/': result = value.a / value.b;
    break;
    case'*': result = value.a * value.b;
    break;
    case'%': result = value.a % value.b;
    break;
    case'^': result = Math.pow(value.a, value.b);
    break;
  }
    
    //Needed breaks