// Temporal Dead Zone 

// The Temporal Dead Zone (TDZ) is the period between entering a block and the point where a variable declared with let or const is initialized. During this time, accessing the variable will throw a ReferenceError.

  // TDZ for 'myVar' begins here
//console.log(myVar); // This would throw a ReferenceError


  let myVar = "Hello"; // TDZ for 'myVar' ends here
  console.log(myVar); // Outputs: "Hello"


// Hoisting in js 

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function).
// Only the declarations are hoisted, not the initializations


// mtlb jab variable banta hai to woh variable 2 hisso mein tut jata hai aur uska declare part upr chala jata hai aur initilization part niche rha jata hai 

// Example with var (hoisted and initialized as undefined):
console.log(x); // undefined kyoki var x = 10; upr chala jata hai lekin initialization niche rha jata hai 
var x = 5;

// Example with let/const (hoisted but not initialized, so accessing before declaration throws ReferenceError):
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// Function declarations are also hoisted:
foo(); // Output: "Hello from foo"
function foo() {
    console.log("Hello from foo");
}


// var -> hoist -> undefined 
// let -> hoist -> /
// const -> hoist -> /

// this is a contraversial topic on internet that let and const are not hoisted but if you try to print the value and then declare it it will give the error that can not acess before initialization 
// woh ye nhi khata ki can not access before declaration jiska mtlb hai ki let and const bhi hoist hue honge aur bate honge 
