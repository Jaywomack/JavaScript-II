/******************************************************************
 * TRAINING KIT PRACTICE
 * Closures
 * A closure is a combination of a function, and the lexical environment withing which that function was declared.
 * When a function is declared, a new scope is created, a functional scope.
 * The variables or functions declared withing that function have the ability to reach outward for context, but never inward.
 * This paradigm remains true, no matter how deep you nest functions.
 */
        //Example 1
//  const foo = 'bar';                             // outside scope
//  function returnFoo () {                    //Has access to the^^^^^^^^^^^^^^^ 
//      return foo; // The code inside this function^^^^^^^^^^^^^^
//  }

//  returnFoo() //invoking the function

//         //example 2
//  const lastName = 'Bond';
//  function greet() {
//     const firstName = 'James';
//     console.log(`The names ${lastName}, ${firstName} ${lastName}`)

//  }
// greet()
// console.log(lastName) // There is access to the lastname variable because it is in the global scope.
// console.log(firstName) //There is not access to this variable because it is nested in a function.

/*******************************************************************************8
 * Code Follow Along
 */

//  const counter = () => {
   
//      let count = 0;
//      return function() {
//         return ++count
//      }

//  }
//  const newCounter = counter();
//  console.log(newCounter);

//  /************************************************************************************
//   * Callbacks
//   * Stem from the programming paradigm called functional programming
//   * functions as first class citizens- You can store a function as a variable and pass that variable around as a variable
//   * functions that can be passed as a parameter to another function
//   * functions are a Type in JS like any other, Boolean, String, Number etc.
//   */

//   //Example 1
//   const functionFeeder = function(callback) {
//       callback('Hello from the inside of Function Feeder');
//   };


// functionFeeder(function(greeting) {
//     console.log(greeting);
// });

// //Example 2

// function sayHello(name) {
//     console.log(`Hello, ${name}`)
// }

// function callSayHelloWithLars(callback) {
//     const innerName = 'Lars';
//     callback(innerName)
// }

// callSayHelloWithLars(sayHello);

/**************************************************
 * Callback code along
 */
const elements = ['earth', 'wind', 'fire', 'water'];

const newForEach = (list, callBack) => {
    for(let i = 0; i < list.length; i++) {
        callBack(list[i], i)
    }
};

newForEach(elements, function(item, index) {
    console.log(item, index);
});














































