// A function is a reusable block of code designed to perform a specific task.

// function FunctionName( Parameters ){
    //code 
// }
// this known as function declaration or statement 


// let FunctionName = function(Parameters){
    // code
// }
// this known as function expression


// let func = ()=>{
//     console.log("Hello world");
// }
// this is fat arrow function 

function add(v1, v2 ){
    console.log(`The sum is ${v1+v2} `)
}

add(4,5) // these 4 , 5 are arguments real value jo tum call karte waqt bhej rhe ho 

 
// Default , rest and spread parameters 


// Default => Jab tum function call karte waqt koi argument pass nahi karti, to default value use hoti hai.
function greet(name = "Kritika"){
    console.log(`Hello, ${name} !`)
}
greet()
greet("Shrishti")
// Jab kisi parameter ki value optional ho ya fallback value chahiye.

// Rest => Jab tum function ko unknown number of arguments pass karti ho, tab rest parameters ka use hota hai. Yeh values ko ek array mein collect kar leta hai.

function sumAll(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  console.log("Total:", sum);
}

sumAll(1, 2, 3);         // Total: 6
sumAll(5, 10, 15, 20);   // Total: 50

// for (let num of numbers) { ... }
// Ye ek for...of loop hai.
// Yeh loop array ke har element ko ek-ek karke num variable mein daalta hai.
// Phir us num ko sum mein add karta hai.
// Jab pata nahi ho kitne arguments aayenge function mein.



// Spread => Yeh kisi array ya object ke elements ko individual values ke form mein "spread" karta hai.
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];   // Spread arr1 into arr2
console.log(arr2);           // Output: [1, 2, 3, 4, 5]
// Arrays ya objects copy karne ke liye use hota hai sath mein Elements ko merge karne ke liye
// aur Function call mein array ke elements ko as individual arguments dene ke liye
