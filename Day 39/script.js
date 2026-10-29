//* Q.1 Write a function sayHello that prints "Hello JavaScript"
function sayHello() {
    console.log("Hello Javascript")
}


//* Q.2 Write a function that add(a,b) that return their sum and log the result.

function add(a, b) {
    return a + b;
}

let result = add(5, 5);


//* Q.3 Write a function with a default parameter `name = "Guest"` that prints `Hi <name>`.
function defFunc(name = "Guest") {
    console.log(`Hi ${name}`)
}



//*Q.4 Use rest parameters to make a function that adds unlimited numbers

let sum = 0;

function addInfinite(...val) {
    let ans = val.reduce(function(acc,val){
        return acc + val
    },0)
    console.log(ans)
}



//* Q.5 Create an IIFE that prints `"I run instantly!"`.
/* (function (){
    console.log("I run instantly!")
}) ();
 */

//* Q 6. Make a nested function where the inner one prints avariable from the outer one.

function outerFun(){
    let n = 10;
    function innerFun(){
        console.log(n)
    }
    innerFun();
}

//* Q.7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

let fruits = ["apple","Mango","orange","Guava","Banana"];

fruits.push("Watermelon")
fruits.shift();


//* Q. 8 Use a `for` loop to print all elements of an array.

// for(let i = 0; i< fruits.length; i++){
//     console.log(fruits[i])
// }


//* Q.9 Create an object `person` with keys `name`, `age`,and `city`, and print each key’s value.
let person = {
    naam: "Rohit",
    age: 22,
    city: "Bhopal"
}

// for(const key in person){
//     console.log(`${key}: ${person[key]}`)
// }



//* 10. Use `setTimeout()` to log `"Time’s up!"` after 2seconds.SHERYIANS CODING SCHOOL 

// setTimeout(function(){
//     console.log("SHERYIANS CODING SCHOOL")
// },2000)