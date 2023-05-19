// Name Shuffler

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" -- > "McClane john"

// function nameShuffler(str){
//   //Shuffle It
// }

// function nameShuffler(str){
//   //Shuffle It
// }


//P: Takes in a string with two names. Always only two.


//R: Returns the string with the two names swapped in order.


//E: ('Lis Wolden' => 'Wolden Lis'), ('Swift Taylor' => 'Taylor Swift'), ('Jane Doe' => 'Doe Jane')


//P: Take in the string and split into an array. Return the string with template literals in reverse order.

const nameShuffler = (str) => {
  let arr = str.split(' ')
  return `${arr[1]} ${arr[0]}`
}