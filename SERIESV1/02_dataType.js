"use strict";
// use strict is used to treat all js code as newer vwrsion 
// its automatically done in now a days but writing this is a good syntax 

// alert(3+3)
// we are using node js not browser 

console.log(4+5)

// Primitive Data Type - 7
let name = "Kritika" // String
let age = 18       // Number 
let isLoggedIn = false    // Boolean 
let temp = null // null = standalone value 
let state  // undefined 
// symbol = unique immutable value 

let p = Number.MAX_SAFE_INTEGER // This is the maximum value you can take to take data type bigger than this we use bigint
console.log(p)
const bigNumber = 1234568562464521n
console.log(bigNumber+4n)   
// just type the integer and add n at the end 
// BigInt: Represents whole numbers that are very much larger 


// Non Premitive (Reference Data Types ) - 5
 // objects - A collection of key-value pairs. This category includes:
// Arrays: Ordered lists of values (e.g., [1, 2, 3]).
// Functions: Reusable blocks of code that can be executed.
// Dates: Objects representing specific points in time.
// Regular Expressions: Objects used for pattern matching. 

console.log(typeof null)
// null is an object 
// This is actually a bug in JavaScript that goes back to its very early version (from 1995!).
// For objects, the type tag was 0.
// For null, it also got tagged with 0 by mistake.
// So typeof null returns "object" — even though it's not an object.

console.log(typeof NaN)

// Primitive data types Stored directly by value
// Non - Primitive data types Stored by reference (address in memory)


// if we work on memory 
// stack(Primitive) and heap(Non-Primitive )


// stack(Primitive) and heap(Non-Primitive )

// In JavaScript, primitive data types (like String, Number, Boolean, null, undefined, Symbol, BigInt)
// are stored in the stack memory. When you assign a primitive value to a variable, the value itself is stored.

// Non-primitive data types (like Objects, Arrays, Functions, Dates, RegExps) are stored in the heap memory.
// When you assign a non-primitive value to a variable, the variable stores a reference (address) to the location in the heap
// where the actual data is stored.

// Example:
let a = 10; // 'a' holds the value 10 directly (stack)
let b = a;  // 'b' gets a copy of the value 10 (separate from 'a')
b = 20;     // changing 'b' does not affect 'a'

let obj1 = { name: "Kritika" }; // 'obj1' holds a reference to the object in heap
let obj2 = obj1;                // 'obj2' gets the same reference as 'obj1'
obj2.name = "Jain";             // changing 'obj2' also changes 'obj1' (since both point to the same object)
console.log(obj1.name);         // Output: