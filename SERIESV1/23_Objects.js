// JavaScript mein object ek aisa data type hai jismein key-value pairs hote hain.
// this is known ad key-valye structure of object  
let obj = {
    name : "Kritika",
    age :20,
    marks : [10,20,30],
    pass : true 
}

console.log(obj)
console.log(obj.marks) // Access
console.log(obj['age']) // another method to access 

name2 = "name" 
console.log(obj.name2) // undefined because . lgake literrally usse ke andar ke value search karega to nahi mila to undefined dega
console.log(obj[name2]) // ab kritika mil rha hai kyoki yha name2 convert ho jayega name mein islia humne access karne ha second method nikala 



/// Jab ek object ke andar dusra object ya array hota hai, usse nested object ya nested structure bolte hai
let student = {
  name: "Kritika",
  age: 21,
  address: {
    city: "Panipat",
    pincode: 132103
  }
};
console.log(student.address.city); // Panipat 

// Object destructuring ka matlab hota hai:
// Object ke andar se specific properties ko nikaal kar unhe alag variables mein assign karna — short syntax mein jaise array mein karte the 
let user = {
  name: "Kritika",
  age: 21,
  city: "Panipat"
};
// let name = user.name;
// let age = user.age;
// After destructuring  
let { name, age } = user;
console.log(name); // Kritika
console.log(age);  // 21
// Bas key ka naam likho — value automatically assign ho jaati hai!

