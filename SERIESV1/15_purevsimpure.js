// pure and impure function 

// Pure function means jiske vjha se koi bhi bhr ke value na badle 

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always returns 5


let count = 0;

function increment() {
  count += 1;
  return count;
}

console.log(increment()); // Output depends on global variable


