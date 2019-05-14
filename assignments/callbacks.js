// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });




function getLength(arr, cb) {
  return cb(arr.length) //callback function that returns the length of the array
}                               

getLength(items, function(length) { //invoking the function and passing the callback as the parameter
  console.log(length)
})


 function last(arr, cb) {
  return cb(arr[arr.length -1]) //callback function that returns the last of the array// }
 }

  last(items, function(last) { //invoking the function and passing the the callback as a parameter
    console.log(last)
  })

 function sumNums(x, y, cb) {
  return cb(x + y)
 }

 sumNums(4, 4, function(add) {
  console.log(add)
 })

 function multiplyNums(x, y, cb) {
  return cb(x * y)
}

multiplyNums(9, 9, function(multiply){
  console.log(multiply)
})

function contains(item, list, cb) {
  if (cb(list.includes(item))) {
  return true
  } else {
    return false
  }
  // contains checks if an item is present inside of the given array/list.	  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.	  // Pass true to the callback if it is, otherwise pass false.

 }	


 contains('Pencil', items, function(match){
  console.log(match)
 })

// /* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
// }
