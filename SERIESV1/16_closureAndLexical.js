// Lexical scoping and closures

// Lexical scoping, also known as static scoping, dictates that the scope of a variable is determined by its physical placement within the code at the time of writing. This means that a function's accessible variables are defined by where it is written in the source code, not where it is called.

function outerFunction() {
  const outerVar = "I am from the outer scope";

  function innerFunction() {
    console.log(outerVar); // innerFunction can access outerVar
  }

  innerFunction();
}

outerFunction(); // Output: I am from the outer scope
// innerFunction is lexically nested inside outerFunction. Due to lexical scoping, innerFunction automatically has access to outerVar from its enclosing scope, outerFunction, even though outerVar is not explicitly passed as an argument to innerFunction.





// A closure is created when an inner function "remembers" and retains access to its lexical environment (the variables and parameters of its outer function) even after the outer function has finished executing. This allows the inner function to continue using those "closed-over" variables. 

function createCounter() {
  let count = 0; // This variable is part of the lexical environment
  return function() { // This inner function forms a closure
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = createCounter(); // A new closure is created
console.log(counter2()); // Output: 1
console.log(counter1()) // output : 3
// This closure "remembers" the count variable from its lexical environment, even after createCounter has finished executing.
// Each time counter1() or counter2() is called, they increment their own separate count variable, demonstrating that each closure maintains its independent state.


