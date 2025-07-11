// Scope ( global , block , functional )

// var is a functional scope 

// 1. Global Scope:
// Variables declared outside any function or block are in the global scope.
// They can be accessed from anywhere in the code.
let globalVar = "I am global";
var a = 123

function showGlobal() {
    console.log(globalVar); // Accessible here
}

// 2. Block Scope:
// Variables declared with let or const inside a block (e.g., inside { }) are only accessible within that block.
{
    let blockVar = "I am block scoped";
    console.log(blockVar); // Accessible here
}

// console.log(blockVar)   // Error blockVar is not defined


// 3. Functional (Function) Scope:
// Variables declared with var inside a function are only accessible within that function.
function myFunction() {
    var functionVar = "I am function scoped";
    console.log(functionVar); // Accessible here
}

// console.log(functionVar); // Error: functionVar is not defined



//let and const follow block scope.
// var ignores block scope — which leads to bugs.



// normal se baat ye hai ki var sirf functions ki respect karta hai jabki const and let block ke bhi respect karte hai 

// ok now there is one advanced topic 
// Object.freeze() is a method in JavaScript that makes an object immutable. Once an object is frozen, you cannot add, remove, or change its properties or values.
// It is used to prevent the modification of an object's properties or values. It is a way

const user = { name: "Kritika", age: 22 };
Object.freeze(user);

user.name = "Jain"; // This will not change the name
user.city = "Delhi"; // This will not add a new property

console.log(user); // Output: { name: "Kritika", age: 22 }


//  When you use const to declare an object, you cannot reassign the variable to a new object, but you can change the properties of the object (unless it's frozen).

// When you use const to declare an object, you cannot reassign the variable to a new object, but you can change the properties of the object (unless it's frozen).

const person = { name: "Kritika" };
person.name = "Jain"; // Allowed: property changed
// person = { name: "Someone else" }; // Error: Assignment to constant variable

Object.freeze(person);
person.name = "New Name"; // Not allowed: property won't change after freeze

console.log(person); // Output: { name: "Jain" } before freeze, { name: "Jain" } after freeze

//const prevents reassignment of the variable.