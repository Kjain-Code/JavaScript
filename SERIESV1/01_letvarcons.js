


const accountId = 123456
let accountEmail = "Kritika@gmail.com"
var accountPassword = "12345678"
accountCity = "Delhi"


// without var, let and const, the variables are declared without any keyword, which is not recommended in modern JavaScript.

// const is used to declare a constant variable, which means its value cannot be changed after it is assigned.

accountEmail = "Kannu@gmail.com"
accountPassword = "87654321"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity])
// console.table is used to display tabular data in the console, which is useful for debugging and inspecting objects or arrays in a structured format.
// means here we dont have to write console.log for each , we can write it in a single line 
// and it will display in a table format with index number as the first column and the values as the second column.


// variable can be declare by using both let and var, but there is a difference between them:
// 1. let is block scoped, which means it is only accessible within the block it is defined in, while var is function scoped, which means it is accessible throughout the function it is defined in.
// 2. let cannot be redeclared in the same scope, while var can be redeclared in the same scope.
// 3. let is not hoisted, which means it cannot be accessed before it is declared, while var is hoisted, which means it can be accessed before it is declared (but its value will be undefined until it is assigned a value).
// 4. let is preferred over var in modern JavaScript because it provides better scoping and avoids potential issues with variable redeclaration and hoisting.
// 5. let is more suitable for block-level variables, while var is more suitable for function-level variables.
// 6. let is more readable and maintainable, while var can lead to confusion and bugs in the code.
// 7. let is more efficient in terms of memory usage, while var can lead to memory leaks if not used properly.
// 8. let is more suitable for modern JavaScript frameworks and libraries, while var is more suitable for legacy code.

// so use mostly let to declare variables in modern JavaScript code, as it provides better scoping and avoids potential issues with variable redeclaration and hoisting.
// Use const for variables that should not be reassigned, such as configuration values or constants.

// Prefer not to use var 


var a ;  // Declare 
// var a = 12;  // Declare and initialize 
let b ;  
// const a ; // this is an error 
// In JavaScript, when you declare a variable with const, you must assign it a value at the same time. You cannot just 
// declare it without initialization. This is because const means the variable is a constant and cannot be changed or left undefined.


var a = 12; // Declare and Assigned/ Initialize 
a = 15;    // Reassigned 
var a = 78;  // Redeclare and Reassigned

let z = 16 // Declare and Assigned 
z = 17 // Ressigned 
// let z = 78 // this is an error
