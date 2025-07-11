// find() pehle element ko return karta hai jo condition ko true kare.
// Agar koi bhi match nahi hua, to undefined return karta hai.
// Ek item nikalna hai, poora nahi (like filter() karta hai).

let arr = [11,25,36,5,25,]
let result = arr.find(function(val){
    return val<10
})
console.log(result)


// some() check karta hai ki kya array mein koi ek bhi element aisa hai jo condition satisfy karta ho.
// Agar at least 1 match mil gaya → true
// Nahi mila → false

let num = arr.some(function(val){
    return val > 10
})
console.log(num) // true 
// kya koi ek bhi match karta hai? at least one 


// every() check karta hai ki array ke saare elements condition ko satisfy karte hain ya nahi.
// Agar ek bhi element fail ho gaya, to false.
// some ka ulta har ek element ko check karta hai.
let num2 =arr.every(function(val){
    return val > 10
})
console.log(num2) // false 


// Destructuring – Break karke nikaalna
// iska mtlb hai kisi array ya object se values nikalna aur kisi alg variable ko assign karna 
let fruits = ['apple', 'banana', 'mango'];
let [a, , b] = fruits;
console.log(a); // apple
console.log(b); // mango 


// Spread Operator (...) – Bikhere hue item ko phaila do 💥
// Spread operator ... ka use hota hai:
// Arrays ya objects ko copy karne
// Merge karne
// Ya pass karne as arguments

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2 , 3, 4, 5]

// basically agr hum likhte hai let arr2 = arr to vo copy nhi hota balki refrence value jati hai agr aap arr2 mein change karte hai to arr bhi change ho jata hai
// to copy karne ke lia spread operator use kiya jata hai 
// ab yha agr maine arr2 mein koi bhi change kare to arr mein koi change nhi hoga 


