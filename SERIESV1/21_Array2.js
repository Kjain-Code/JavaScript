let arr = [11,25,36,12,14]

arr.forEach(function(val){
    console.log(val + 1)
})
// foreach ek method hai jo array ke har element ke lia ek function run karta hai 
// Matlab: agar array mein 5 elements hain, to forEach uss function ko 5 baar call karega — har element ke liye ek baar.
console.log(arr)  // for each copy deta hai array ko change nhi karta 


let newArr = arr.map(function(val){
    return val*2
})
console.log(newArr)
// map() ek naya array return karta hai, jismein har element original array ke elements par kuch operation karke banta hai.
// ye ek nya array create karta hai 
// agr aap kuch return nhi karoge to undefined dega 
// map tab use karna hai jab aapko ek nya array bnana hai 



// filter() ek array method hai jo original array ke kuch elements ko filter karke ek naya array banata hai — based on condition.
// filter() sirf un elements ko return karta hai jo condition ko true karte hain.
// return = true ➤ element new array mein jayega
// false ➤ nahi jayega

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(function(val){
    if(val%2==0) return true 
})
console.log(evenNumbers); // [2, 4, 6]
// agr hum yha map use karte to chode gye values ke jagh undefined aata 



// reduce() ek powerful method hai jo array ke saare elements ko mila ke ek single value return karta hai.
// Matlab: Tumhare paas agar ek array hai, aur tum usme kuch calculation (like sum, product, merge, etc.) karna chahte ho — to reduce() best hai.
let ans = numbers.reduce(function(accumulator , value){
    return accumulator + value
},0)
console.log(ans) 
// yha pe 2 chije hai acuumulator jiska naam aap jo chahe rakh sakte hai . accumulator vo chij hai jiski starting value phale se hi defined ji hate hai ex. yha pe zrro ki aur vo update hoke value yaad rakhta hai 
// 0 is the initial value of accumulator 
// value is the currect value 
// accumulator is the updated value 

// multiple all elements 
let mul = numbers.reduce(function(acu , val){
    return acu*val
},1)
console.log(mul) 


