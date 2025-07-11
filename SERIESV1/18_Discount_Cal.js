// here we are going to create a reusable discount calculator by using high order

// A higher-order function is a function that does one or both of the following:
//    1. Takes another function as an argument
//    2. Returns a function

function discountCalculator(discount){
    return function(price){
            return price - (price * (discount / 100))
    }
}

let ten = discountCalculator(10)
let twenty = discountCalculator(20)
// here we can give the discount that we want 


console.log(ten(200))
console.log(twenty(200))