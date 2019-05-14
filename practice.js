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
// const elements = ['earth', 'wind', 'fire', 'water'];
// const els = ['pencil', 'notebook', 'backpack', 'textbooks'];

// const newForEach = (list, callBack) => {
//     for(let i = 0; i < list.length; i++) {
//         callBack(list[i], i)
//     }
// };

// newForEach(elements, function(item, index) {
//     console.log(item, index);
// });

// newForEach(els, function(item, index) {
//     console.log(item, index)

// });

// const elements = ['earth', 'wind', 'fire', 'water'];
// const els = ['pencil', 'notebook', 'backpack', 'textbooks'];

// function showFirst(array, callback) {
//     callback(array[0])
// }

// function showLength(list, cb) {
//     cb(list.length);
// }
// showFirst(elements, (firstItem) => {
//     console.log(firstItem)
// })

// showLength(elements, (lengthOfList) => {
//     console.log(lengthOfList)
// })
// /*************************************************************************
//  * 
//  */
// // For loop review

// ninjaTurtles = ["Leo", "Ralph", "Donnie", "Mikey"]

//  for(let i = 0; i <ninjaTurtles.length; i++) {
//     console.log( `${ninjaTurtles[i]} eats ${ninjaTurtles[i+1]}`) 
// }

// // // write a for loop which returns a string "ninjaTurtleName eats a slice of pizza." for each Teenaged Mutant Ninja Turtle in the array.
// // for(let i = 0; i < ninjaTurtles.length; i++) {
// //     console.log(`${ninjaTurtles[i]} eats a slice of pizza.`)
// // }
// /*************************************
//  * Lecture 
//  * Closure
//  */
// function kingdom () {
//     const queen = 'Queen Hannah';
//     console.log(`Long live the ${queen}`)

//     //a city in the kingdom
//     function city() {
//         const mayor = 'Mayor Eli';
//         console.log(`${queen} demands more taxes!`);

//         function town() {
//             const townCrier = 'Crier Austen'
//             console.log(`${townCrier} has a message for you`)
//             town()
//         }
//     }
//     city()
// }

// kingdom()


/***************************************************************
 * Lecture
 * Callbacks
 */

//  function compute(param1, param2, callback) {
//      return callback(param1, param2);           //this is a callback function that will take
//                                                 //in 2 parameters and then pass call the function as  the callback for the third 
//  }

//  function add (a, b) {
//      return a + b                             
//  }

// function subtract (a, b) {
//     return a - b
// }

// function multiply (a, b) {
//     return a * b
// }

// console.log(compute(2, 4, add));
// console.log(compute(4, 4, multiply));
// console.log(compute(3, 3, subtract));

//Async Callback Example
// setTimeout(function() {
//     console.log('Hello');
// }, 3000);


/***************************************************************
 * Lecture 
 * Advanced Array Methods
 */
const cityData = [
    {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
    {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
    {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
    {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
  ];

// for(let i = 0; i < cityData.length; i++) {
//     function doSomething() {
//         console.log(`My city: ${cityData[i].city}`);
//     }
//     doSomething();           //A for loop allows to iterate over an array by two or threes or in reverse. the for each goes
                                //over each item in the array
// }


// cityData.forEach( function(currentCity) {
//     console.log(`My city: ${currentCity.city}`) //A forEach loop that iterates through every item in an array
// });                                              //and returns whatever is done in the function

let cityPopulations = cityData.map( function(iteratedCity) {
    return iteratedCity.population                // The .map array method will iterate over the array and 
})
console.log(cityPopulations)

let bigCities = cityData.filter( function (landMass) {
    return landMass.land_area > 200;
})

console.log(bigCities)

let totalLandArea = cityData.reduce( function(total, currentCity){
    return total + currentCity.land_area   //the total is an accumulator. It starts at the set value and continues to log the total
},0)                                         // as it iterates through the array
//Starts the total at a certain number. The number can be anything
console.log(totalLandArea)





































