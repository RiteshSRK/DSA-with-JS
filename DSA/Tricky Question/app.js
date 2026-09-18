// Use rest parameter to accept any number of scores and return the total.

// function getScore(...score){
//     let total = 0;
//     score.forEach(function (val) {
//         total = total + val
//     })
//     return total
// }

// console.log(getScore(10, 12, 14, 18))



function getScore(...score){
    let total = 0;
    score.map((val) => total = total+= val)
    return total
}

console.log(getScore(10, 12, 14, 18))

//  convert to early return
// function checkAge(age){
//     if(age < 18){
//         console.log("Too young")
//     }else{
//         console.log("Allowed")
//     }
// }

function checkAge(age){
    if(age < 18) return "Too young";
    return "Allowed";
}
console.log(checkAge(19));  //  Allowed
console.log(checkAge(12));  //  Too young

//  Aisa function jo kuxx nhi return karta vo undefined return karta hai
function f(){
    return;
}

console.log(f());