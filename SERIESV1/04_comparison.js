console.log(2>1)
console.log(2<1)
console.log(2>=1)
console.log(2<=1)
console.log(2==1)
console.log(12!="12") // Not Strict return false
console.log(12!=="12") // strict return true 


// there all are simple lets understand comparasion between different data types 

console.log("2">1)
// it automatically convert strring 2 into integer 2 so it will be true
 
console.log(null>0)  // False
// When using >, JavaScript converts null to a number (0), so it checks 0 > 0, which is false.
console.log(null == 0 )  // False
// The loose equality (==) does not convert null to 0.
// null is only loosely equal to undefined, not to 0.
// So, false
console.log(null >=0)  // True 
// Here, null is converted to 0, so it checks 0 >= 0, which is true.

console.log(undefined>0)
// undefined is converted to NaN, and NaN > 0 is always false
console.log(undefined==0)
// undefined is only loosely equal to null, not to 0
console.log(undefined>=0)
// undefined becomes NaN, and any comparison with NaN (except !=) is false


// strict checking ====
console.log("2" === 2) // false


// these all are assignment operators 
let a = 12;
a+=3;
a-=11;
a*=2;
a/=2;
a%=3


// Logical 

// && AND Operator both side should be true for true 
// || OR Operator one side should be true for true
// ! for negative means jo hai uska ulta 
// !! is used to find teh truthy and false nature of any value 
console.log(!!12) // it is truthy 



// ?: is ternary operator
// we will use this later 
// Condition ? truth ka code : flase ka code 
3>4 ? console.log("NO ") : console.log("Yes ")

// try to make clean and readable code 