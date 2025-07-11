// iterations are of two type 
//  2 2 2 2 2 2 2 2 2 
// 1 2 3 4 5 6 7 8 9 

// For kaha se jana hai -> kaha tak jana hai 
// while kha se jana hai ->  kab rukna hai 

// 1 - 40 for 
// till hello come while 

// for(start; end; change ){}

// for(let i = 1; i<=40 ; i++){
//     console.log(i)
// }


// break: Exits the loop immediately
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) break; // Loop stops when i is 3
//     console.log(i); // Output: 1, 2
// }

// continue: Skips the current iteration and moves to the next
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) continue; // Skip when i is 3
//     console.log(i); // Output: 1, 2, 4, 5
// }


// print even numbers from 1 to 30 

for(let i=1; i<=30 ; i++ ){
    if(i%2==0){
        console.log(i)
    }
}

for(let p=1; p<=10 ; p++ ){  
       console.log(`5 * ${p} = ${5 * p}`);
}

// The backticks ` ` define a template literal.
// ${i} and ${5 * i} insert the values of i and the result of 5 * i into the string.

// ask the user for a number and print whether each number from 1 to that number is even or odd 

// let val = prompt("Give a number ") use prompt while doint this in browser attach file with html 
// so run this on browser 
for(let x = 1 ; x <= val ; x ++){
    if(x%2==0){
        console.log(`${x} is even`)
    }
    else{
        console.log(`${x} is odd`)
    }
}