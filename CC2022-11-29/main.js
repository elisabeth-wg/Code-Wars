// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!


//P: Will all arguments be arrays? Will their lengths always be 3? Any empty arrays? Numbers or strings or both?

//R: We will return an array with only the front and end position reversed.

//E: If we receive ["cat", "dog", "tiger"] we will return ["tiger", "dog", "cat"]
     If we receive ["tail", "torso", "toes"] we will return ["toes", "torso", "tail"]
     If we receive["teeth", "knees", "waist", "shoulders", "feet"] we will return ["feet", "knees", "waist", "shoulders", "teeth"]  
      
//P: Take in an array. 
// Pop off last item and save as a variable.
// Unshift first item and save as a variable.
// Push arr[0] and unshift arr[length - 1] to the array. 
// Return the array


function fixTheMeerkat(arr) {
    let end = arr.pop();
    let begin = arr.shift();
    arr.push(begin);
    arr.unshift(end);
    return arr
}

//could have done arr.reverse() - realized afterwards there were only arrays with three indices. 
