// Immediately Invoked Function Expression
// Ek function jise likhne ke turant baad hi chala diya jata hai — bina usse baar-baar call kiye.

// Socho tumne ek room saaf kiya aur turant darwaza lock kar diya — ab koi usme ghus nahi sakta.
// IIFE bhi waise hi kaam karta hai — ek function chalu hota hai, kaam karta hai, aur fir lock ho jata hai.

// (function(){

// })();


(function() {
  console.log("IIFE executed!");
})();

(function(){
    let name = 'Kritika'
    console.log("Hello " + name )
})();


// the difference between function declaration and function expression
// hoisting means that a function declaration is moved to the top of the script, while a function expression is not moved.
// JavaScript pehle se kuch cheeze memory mein upar (top) rakh leta hai, chahe wo code mein neeche likhi ho.

greet();

function greet() {
  console.log("Hello Kritika!");
}

// it will work chahe humne call pahle hi kqr diya ho aur function baad mein create liya 

// greet(); // ❌ Error: greet is not a function

// const greet = function() {
//   console.log("Hello Kritika!");
// };

// but this will give error kyoki ye expression ke sath work nhi karta 
// Yahaan sirf greet naam ka variable hoist hota hai, lekin uski value (function) nahi.Isliye JS sochti hai: "greet toh hai, lekin wo abhi undefined hai"


