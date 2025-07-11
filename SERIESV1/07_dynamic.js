// js do not include static typing it just support dynamic typing this means you can chnage the data here 

let a = 12;
a = true 
a = 'Kritika'
a = null 
// it does not have any problem if we chnage the value 

// for a good developer static typing is better than dynamic 

// type coercion = it is a concept jha pe aapka  ek type automatically convert ho jayega 
"5"+1


// Truthy and Falsy values 


// Falsy values in JavaScript are values that evaluate to false when used in a boolean context.
// There are only 6 falsy values:
console.log(Boolean(false));    // false
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false (empty string)
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false

// Everything else is considered truthy
console.log(Boolean("hello"));  // true
console.log(Boolean(123));      // true
console.log(Boolean([]));       // true (empty array)
console.log(Boolean({}));       // true (empty object)
// and many more 

// Falsy: false, 0, "", null, undefined, NaN
// Truthy: Everything else

// JavaScript uses truthy and falsy values to make conditional checks flexible and concise. When a value is used in a boolean context (like in an if statement), JavaScript automatically converts it to true or false based on its "truthiness" or "falsiness".
