// The Wide - Mouthed frog!

// The wide - mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

// function mouthSize(animal) {
//   // code here
// }

//P: Takes in an argument of an animal name as a string. Test cases only show full names,not nums or empty strings etc.

//R: It returns a mouth size of 'small' if an alligator is detected or a 'wide' if any other animal is detected.

//E: ('cat', 'wide'), ('ant', 'wide'). ('alligator', 'small')

//P: Take in the argumenta. Create a conditional. If alligator return small else return wide.


const mouthSize = (animal) => animal.toUpperCase() === 'ALLIGATOR' ? 'small' : 'wide'