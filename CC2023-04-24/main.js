The 'if' function

Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.

function _if(bool, func1, func2) {
  // ...
}


//P: Takes in three parameters : a boolean and two functions

//R: It calls func1 if truthy and func2 if falsy. Will likely have those two functions return 'True' and 'False' respectively

//E: (true, func1 --> 'True'), (false, funct2 --> 'False'), (3, --> 'True)

//P: Take in the parameters (bool, func1, func2). Create a conditional if bool === true func1 otherwise func2. 

function _if(bool, func1, func2) {
  if(bool) {
    return func1()
  }
  return func2()
}