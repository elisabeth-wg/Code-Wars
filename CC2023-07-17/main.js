// Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// var mergeTwoLists = function(list1, list2) {
    
// };




//PREP:
//  two sorted arrays in non-decreasing order. These are numbers between -100 and 100.
//  return a merged and sorted list.
//  ([1, 2, 3, 4], [3, 4, 5]) -> [1, 2, 3, 3, 4, 4, 5]
//  ([], []) -> []
//  ([0], []) -> [0]
// Use a spread operators to merge the two arrays. Then use a sort method to re-sort. Then return.

// function mergeTwoLists(list1, list2) {
//     let mergedArr = [...list1, ...list2].sort()
//     return mergedArr
// }



//The above didn't work as they needed to be for sorted lists vs arrays. New route:
//create a dummy head node, which will help build a new linked list.
//I compare the first elements of each list. take whichever element is smaller and put it into a new linked list (= currentHead.next).
// If one list was shorter than the other, then there are no longer two elements to compare. so add the longer linked list to the end of the new linked list. 

console.log(mergeTwoLists(([1, 2, 3, 4], [3, 4, 5]), [1, 2, 3, 3, 4, 4, 5]))
console.log(mergeTwoLists(([], []), []))
console.log(mergeTwoLists(([0], []), [0]))

function ListNode(val) {
      this.val = val;
       this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let currentNode = dummyHead; 

    while(l1 !== null && l2 !== null){

        if(l1.val < l2.val){
            currentNode.next = l1;
            l1 = l1.next
        } else {
            currentNode.next = l2
            l2 = l2.next
        }

        currentNode = currentNode.next
    }

    if(l1 !== null) {
        currentNode.next = l1;
    } else if (l2 !== null) {
        currentNode.next = l2
    }

    return dummyHead.next
}




