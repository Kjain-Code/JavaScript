// Arrays help you store multiple values in a single variable — numbers, strings, or even objects/functions.

let arr = [10,20,30,40]
console.log(arr[3]) // Access
console.log(arr[3] = 12) // modify 
console.log(arr[3])

// Now let's understand some methods 

arr.push(50) // Add a new element at the end of the array
console.log(arr)

arr.pop() // remove the elelemt from the end of the array
console.log(arr)

arr.shift() // remove the element from the starting of the array 
console.log(arr)

arr.unshift(25) // add elment in the starting of the array 
console.log(arr)

arr.splice(2,1) // splice method is used to remove value from the between it contain two thig one is index and other one is number of values to remove ( kha se hatane hai aur kitne hatane hai )
console.log(arr)
// splice add bhi kar deta hai agr aap kuch iss trah likhe splice(1,0,4) iska mtlb hai 1st position se 0 hatane hai aur 4 add karna hai

let nerArr = arr.slice(0,2)
console.log(arr)
console.log(nerArr)
// slice method is used to get the value from the array ye array ko change nhi karta balki ek nya array create karta hai 
// jaise yha hum dekh sakte hai arr same output deta hai but new array slice of array 
// one more thing last wala index show karta hai kha tak but excluding it means agr 2 likha hai to excluding 2 . 0 aur 1 index wali value milege 
// slice main elemet ko change nhi karta 

let arr1 = [1,2,3,4,5]
let arr2 = [26,17,8,19,10]

console.log(arr1.reverse())  // array ko reverse kar dega copy nhi bnata main array ko hi change karta hai 


// sort array ko ascending ya descending order mein sort karne ke kaam aata hai humesha function accept karta hai 2 parameter ke sath .
console.log(arr2.sort(function(a,b){
    return a-b; // in ascending order 
}))

console.log(arr2.sort(function(a,b){
    return b-a; // in descending order 
}))


