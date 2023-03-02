// Keep up the hoop

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

//P: n - how many times the hoop goes around. Positive integers, not as strings

//R: return message a string

//E: (10, 'Great, now move on to tricks'), (11, 'Great, now move on to tricks.'), (3, 'Keep at it until you get it."")

//P: Function, that takes in n which is the num of hoops
// if 10 or more return 'tricks' message
//else return the 'keep at it' message

const hoopCount = n => n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it'