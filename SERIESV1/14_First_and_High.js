// first-class functions mean that functions are treated as values — just like variables, numbers, or strings. 


// Passing a function as an argument
function sayHello() {
  console.log("Hello!");
}

function callFunction(fn) {
  fn(); // Call the function passed as argument
}

callFunction(sayHello); // Output: Hello!


// Returning a function from another function
function outerFunction() {
  return function() {
    console.log("I'm the inner function!");
  };
}

const inner = outerFunction();
inner(); // Output: I'm the inner function!



// A higher-order function is a function that does one or both of the following:
//    1. Takes another function as an argument
//    2. Returns a function

// to be high-order function , it must be able to take a function as an argument or return a function as a result. means minimum one condition should be satisfied .


// Function taking another function as input
function sayHello() {
  console.log("Hello!");
}

function greetUser(callback) {
  callback(); // calling the function passed as argument
}

greetUser(sayHello); 


// Function returning another function
function outer() {
  return function() {
    console.log("Inner function called");
  };
}

const innerFunc = outer(); // outer returns inner
innerFunc(); 
// Output: Inner function called
