// Remove duplicates from list

// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.


// function distinct(a) {
//   return [];
// }

//PREP
//Takes in an array of numbers
//Returns it as an array but without the duplicates. Do not change the order before returning
//([1,1,2]), [1,2])
//([3,3,3], [3])
//([3,2,2,1,1], [3,2,1])
//Take in array of numbers. Utilize the breadcrumbs/cache technique. Create an object to track each num then push to it as new elements are iterated through. Return as an array without the duplicates in original order.

const distinct = (a) => {
    let breadcrumbs = {};
    let result = [];
   
    for (let i = 0; i < a.length; i++) { // start loop at 1 as element 0 can never be a duplicate
        if (!breadcrumbs[a[i]]) {
            result.push(a[i]);
            breadcrumbs[a[i]] = true;
        }
    }
    return result
};