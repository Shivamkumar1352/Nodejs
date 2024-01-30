let fruits = ["apple", "banana", "orange", "grape"];

fruits.push("kiwi");//add at end
console.log(fruits);

fruits.unshift("mango");//add at first
console.log(fruits);

let removedLast = fruits.pop();//remove last
console.log(fruits);

let removedFirst = fruits.shift();//remove first
console.log(fruits);

let indexOfOrange = fruits.indexOf("orange");

let citrus = fruits.slice(2, 4);
console.log(citrus);

let removed = fruits.splice(1,2,"pear", "melon");
console.log(fruits);

let moreFruits = ["grapefruit", "pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log(fruits);