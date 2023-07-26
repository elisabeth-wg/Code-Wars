// Who ate the cookie ?

// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// function cookie(x){
//   // ...
// }

//PREP
//Take in input (could be string, float/int, or anything else)
//Return the statement "Who ate the last cookie? It was ___!" - add the name corresponding to the input: str:Zach, num:Monica, other: "the dog"
//[2] -> "Who ate the last cookie? It was Monica!"
//['dog'] -> "Who ate the last cookie? It was Zach!"
//[true] -> "Who ate the last cookie? It was the dog!"

//Take in the input and use typeof to determine it's type. Then return correct statement based on type of input. Utilize a switch case.

// console.log(cookie(2), "Who ate the last cookie? It was Monica!");
// console.log(cookie('dog'), "Who ate the last cookie? It was Zach!");
// console.log(cookie(true), "Who ate the last cookie? It was the dog!");


function cookie(x){
  switch (typeof x) {
    case 'string':
      return "Who ate the last cookie? It was Zach!";
    case 'number':
      return "Who ate the last cookie? It was Monica!";
    default:
      return "Who ate the last cookie? It was the dog!";
  }
}
