let score = "33"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)

console.log(typeof score)
// score is still a string 
console.log(typeof valueInNumber)
// we convert it and save into valueInNumber


let a = "33abc"
let b = Number(a)
console.log(typeof b)
console.log(b) // NaN 
// NaN is not a number it convert datatype of 33abc in number but actually its not a number 


// We can read about some of the conversions also 

// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2**3)
// console.log(3%2)

let str1 = "Hello"
let str2 = " Kritika"
let str3 = str1 + str2 
console.log(str3)

// Now the matter is 
console.log("1"+2) // 12
console.log(1+"2") // 12
console.log("1"+2+2) // 122 
console.log(1+2+"2")  // 32

// If any operand is a string, + does string concatenation.
// Operations are left-to-right, so order matters!


console.log(+true) // 1
console.log(+"") // 0 
// these are not preferred


let p = 5;
let q=  ++p; // a becomes 6, then b is assigned 6
console.log(p, q); // 6 6


let x = 5;
let y = x++; // y is assigned 5, then x becomes 6
console.log(x, y); // 6 5


// there is something instanceof 
// The instanceof operator in JavaScript is used to check if an object is an instance of a particular constructor or class.
// always used with refrence data types not primitive 

let arr = [];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

let date = new Date();
console.log(date instanceof Date); // true
console.log(date instanceof Object); // true

console.log(typeof [2,3,4])// object 
// because type of work with primitive and instance of with non-pr  mitive that is refrence 