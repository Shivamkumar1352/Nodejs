let shadowedVar = "I am global";
function exampleFunction(){
    let shadowedVar = "I amm local";
    console.log(shadowedVar);
}
exampleFunction();
console.log(shadowedVar);