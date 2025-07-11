let person = {
    name : "Kritika",
    age : 20,
    email : "kritika@gmail.com",
}

for(let key in person){
    console.log(key , ":" , person[key])
}

 
console.log(Object.keys(person))  // ye object ke sarre keys ko array mein dal deta hai 
// ek array return karta hai, jismein object ki saari keys (property names) hoti hain.
console.log(Object.entries(person)) // array of arrays 
// ek array of arrays return karta hai, jismein har ek item [key, value] pair hota hai.


/// Spread Operator (...) – Copy/Merge Objects
// ... ka use karke hum ek object ke properties ko spread (faila) kar ke naya object bana sakte hain.
let user = { name: "Kritika", age: 21 };
let copy = { ...user };
console.log(copy); // { name: 'Kritika', age: 21 }
// copy create karege refrence nhi 

// Object.assign() – Old-school way to copy/merge
// Object.assign(target, source) target object ko source ki properties se update karta hai, aur same target object return karta hai.
let user2 = { name: "Kritika", age: 21 };
let copy2 = Object.assign({}, user2);
console.log(copy2); // { name: 'Kritika', age: 21 }

