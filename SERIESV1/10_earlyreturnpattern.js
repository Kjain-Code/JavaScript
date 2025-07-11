// function getVal(val){
//     if(val<25) return "A";
//     else if(val <50 ) return "B";
//     else if(val <75 ) return "C";
//     else return "D";
// }

// console.log(getVal(26))



function getGrade(Score){
    if(Score<32) return "Fail"
    else if (Score<60) return "D";
    else if (Score<70) return "C";
    else if (Score<80) return "B";
    else if (Score<90) return "A";
    else if (Score<100) return "A+";
    else return "Invalid Marks";
}


// it is correct but not the way a good programmer do 
// you should use this approach 
// if(Score >=90 && Score <= 100) return A+

console.log(getGrade(82))
console.log(getGrade(92))