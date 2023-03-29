
// Credit Card Mask

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// return masked string
// function maskify(cc) {

// }


//P: Take in any string as a single parameter


//R: Return the same input but mask all of the characters except the last four using "#". If the string or number is less than 4 characters return all as they are. 


//E: ("tuffy" --> "#uffy" ), ("456789"--> "##6789"), ("3" --> "3")


//P: Take in string. Iterate through the string and replace all characters with "#" except the last four. Return the string. 

//First attempt times out:

// function maskify(cc) {
//   let arr = cc.split('')
//   for(let i = 0; i <= arr.length; i++){
//     if(arr[i] !== arr[arr.length-1] && arr[i] !== arr[arr.length-2] && arr[i] !== arr[arr.length-3]  && arr[i] !== arr[arr.length-4]){
//        arr[i] = "#"
//        }
//   let masked = arr.join('')
//   }
//   console.log(masked)
//   return masked 
// }

//

let maskify = cc => {
  if(cc.length <= 4){
    return cc
  }else{
    return '#'.repeat(cc.length - 4) + cc.substr(-4);
  }
}