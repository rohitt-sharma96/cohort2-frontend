
// 14 > 13 ? console.log('true hai') : console.log('false hai')

let obj = {

}

obj?.name?.sirName?.sf

// Assignment Work 
// Create two number a = 10 and b = 3  perform and log
// let a = 10;
// let b = 3
// console.log(a+b)  //13
// console.log(a-b)    //7
// console.log(a*b)    //30
// console.log(a/b)    //3
// console.log(a%b)    //1
// console.log(a**b)   //1000



let x = 5;

x = x + 3;
// console.log(x)// 8

x += 3;
// console.log(x)//11

x -= 3;
// console.log(x)//8

x *= 3;
// console.log(x)//24

x /= 3;
// console.log(x)//8


let count = 5;

// console.log(count);
count++;
// console.log(count);


// console.log(5 == "5")
// console.log(5 === "5") 

// check if 10 is greater than 5, less than 20, and equal to 10. 

// console.log(10 > 5) //true
// console.log(10 < 20) //true
// console.log(10 === 10) //true


// console.log(true && false) // false
// console.log(true || false) // true
// console.log(!(true)) // false


// Predict the result 
// console.log(5 > 3 && 10 > 8) //true
// console.log(5 > 3 || 10 > 8) //true



//* Bitwise Operator

// console.log(5&1)
//     5 ke binary number(0101) or 1 ke binary number(0001) dono pe AND operation lagega
//         Rule - Dono true rahega tabhi true hoga nhi to false hoga 
//         0101
//       & 0001
//      ------- 
//      0 0 0 1  -> iska decimal number hoga 1 jo answer hoga 



// console.log(5|1)
//     aise hi ispe 5 ke binary number (0101) and 1 ke binary number (0001) pe OR operation lagega 
//  Rule - dono me koi ek true ho gya to true maana jayega OR ke case mein 

//     0101
//   | 0001
//   ---------
//     0 1 0 1  -> iska decimal value hota hai  5 jo answer hoga



// console.log(a) // undefined
var a = 12;


// console.log(b); //cannot access before initialization
let b = 12

// test(); // Hello

function test() {
    console.log("Hello");
}


// hello();

// var hello = function(){console.log("Hi")}

// Error - hello is not a function 
//* Why - kyunki function expression (var hello = function(){}) upar jaata hai jo tut ke hello = undefined ho jata hai aur function ke andar ki value ko upar (hoist) leta hi nhi isliye var hello = undefined call krne pe bolta hai ki hello() function nhi hai

// What get hoisted ?
// - Only (var hello = undefined) get hoisted. Or only function expression get hoisted.

// What not get hoisted ?
// - Fucntion value does not get hoisted 



// Take input using prompt for age. if age > 18 -> "Adult" else -> "Minor"
// let age = prompt("Enter your age");
// if (age > 18) {
//     console.log("Adult")
// } else {
//     console.log("Minor")
// }


//Write a Program 
// if marks >= 90 -> "A grade"
// else if marks >= 75 -> "B grade"
// else if marks >= 50 -> "C grade"
// else -> "Fail"

// let marks = prompt("Enter Your Marks");

// if (marks >= 90) {
//     console.log("A grade");
// } else if (marks >= 75) {
//     console.log("B grade");
// } else if (marks >= 50) {
//     console.log("C grade");
// } else{
//     console.log("Fail");
// }

// let city = "Bhopal";

// if(city === "Bhopal") {
//     console.log("MP")
// } else if(city === "Delhi"){
//     console.log("Capital");
// } else {
//     console.log("Unknown City")
// }

// let score = 40;
// score > 35 ? console.log("Pass") : console.log("Fail");

//  Convert if else into a ternary operator.
//  if (temperature > 30 ) {"Hot"} else {"Pleasant"}

// let temperature = 30;
//     temperature > 30 ? console.log("Hot") : console.log("Pleasant")


// Write a switch case :
//  Take day number (1 to 7).
//  Print the day name.
//  Default case: "Invalid day";

//     let day = 11
//     switch (day) {
//     case 1:
//         console.log("monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Invalid Day")
// }


// Using a logical operators in  condition 
//  if age > 18 and country == "india" then eligible for vote 
// else "not eligible"

    let age = 22;
    let country = "india"

    if (age > 18 && country === "india"){
        console.log("Eligible for vote")
    } else {
        console.log("Not eligible")
    }