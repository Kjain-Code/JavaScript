// agr  aap spread operator use kar rhe ho object ko copy karne ke lia to sirf top level properties hi copy hoti hai . nested obj ka refrence hi dene lag jata hai 
// to uske lia aap use karte ho deep cloning 

let original = {
  name: "Kritika",
  details: {
    city: "Panipat"
  }
};

let shallowCopy = { ...original };
shallowCopy.details.city = "Delhi";

console.log(original.details.city); // ❌ "Delhi" (original bhi change ho gaya)


// JSON.stringify()   change it into string 
// JSON.parse() change it into obj again 

let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.details.city = "Noida";
console.log(original.details.city); // ✅ Panipat (original safe)
//  Limitations:
// undefined, functions, Date, Map, Set — ye sab remove ya corrupt ho jaate hain.



//  Deep Cloning using structuredClone() (Modern way)
let deepClone = structuredClone(original);
deepClone.details.city = "Mumbai";
console.log(original.details.city); // ✅ Panipat
//  Yeh even Date, ArrayBuffer, Map, etc. ko bhi copy karta hai.



// Jab tum kisi nested property ko access kar rahi ho, aur us path mein koi property undefined ya null ho jaaye, to normally JavaScript error de deta hai.
let user = {
  name: "Kritika",
  contact: {
    email: "kritika@example.com"
  }
};
// Access safely
console.log(user.contact?.email);     // ✅ kritika@example.com
console.log(user.contactssss?.city);      // ✅ undefined error nhi de rha 


// Computed Properties ka matlab hota hai:
// Object banate waqt key ko dynamically (calculate karke) banana using square brackets [].
let key = "name";

let user2 = {
  [key]: "Kritika"
};
console.log(user2); // { name: "Kritika" }
