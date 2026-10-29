//* Q.1 Ask user's age and check if eligible to vote.

// let age = prompt("Age batao apna")

// if(age === null){
//     console.error("You Pressed Cancel...")
// } 
// else {
//     age = age.trim();
//     if(age === "" ){
//         console.error("Kuchh value enter karo")
//     }
//     else {
//         age = Number(age)  //This will return NaN
//         if(isNaN(age)){
//             console.error("Please Enter a Number ")
//         }
//         else{
//             if(age < 0) console.error("Age cannot be less than zero");
//             else if(age >= 18) console.log("You Can Vote!");
//             else console.log("You cannot Vote!");
//         }
//     }
// }


//* Q.2 Print Multiplication table of 5

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`)
// }


//* Q.3 Count how many number between 1 and 15 are greater than 8 Loop and count conditionally.
// let count = 0;
// for(let i = 1; i<=15; i++){
//     if(i > 8){
//         count++
//     }
// }
// console.log(count)



//* Ask user for password and print access status Harcoded correct password. Compare with user input.
// let password = "harshbhai";
// let userPassword = prompt("Enter your password")

// if(userPassword === null){
//     console.error("You Press Cancelled it...")
// }
// else {
//     if(password === userPassword){
//         console.log("Matched...")
//     }
//     else {
//         console.error(" Not Matched...")
//     }
// }


// LEVEL - 2

//* Q.1 Allow only 3 attempts to enter correct password, If user get it right early stop. -> If not account locked



// let attempts = 0;
// let flag = false;

// let pass = "harshbhai";
// let userPass = prompt("password batao")
// attempts++;

// if (userPass === pass) {
//     flag = true;
// }

// while (userPass !== pass) {

//     if (attempts === 3) {
//         console.error("Account Locked")
//         break;
//     }
//     userPass = prompt("password batao")
//     if (userPass === pass) flag = true;
//     attempts++;

// }

// if (flag === true) console.log("Account opened");



//* 12. Ask user for words until they type “stop”. Count how many times they typed “yes”  Loop until "stop" is typed. Count "yes".
// let count = 0;

// let words = prompt("enter your word");
// count++;

// while(words !== "stop"){
//     words = prompt("enter your word");
//     count++;
// }
// console.log(count);



//* 13. Print numbers divisible by 7 from 1 to 50  Use modulo % and loop.

// for (let i = 1; i <= 50; i++) {
//     if (i % 7 === 0) {
//         console.log(i);
//     }
// }

//* 14. Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum.

// let sum = 0;
// for(let i = 0; i<= 30; i++){
//     if(i % 2 == 1){
//         sum += i;
//     }
// }

// console.log(sum);



//* 15. Keep asking number until user enters an even number Use while loop. Stop only if input is even.

// let n = prompt("Enter a number")

// while (n) {
//     console.log(n);
//     if (n % 2 === 0) {
//         break;
//     }
//     n = prompt("Enter a number")
// }


//* 16. Print numbers between two user inputs Input start and end using prompt() → print all between.

// let start = prompt("Enter the starting Number");
// let end = prompt("Enter the ending Number");

// if(start > end) console.error("start cannot be bigger than end")

// start = Number(start) //Or you can use + before prompt (e.g. +prompt)
// end = Number(end)

// for(let i = start; i<= end;  i++){
//     console.log(i);
// }


//* 17. Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints.

// let count = 0;

// for(let i = 1; i<=20; i++){
//     if(i % 2 === 1){
//         if(count === 3) break;
//         console.log(i)
//         count++;
//     }
// }



//* 18. Ask user 5 numbers. Count how many are positive Use loop + condition + counter.

// let count = 0;
// let positive = 0;
// let n = +prompt("Enter a number")
// count++;

// while (count < 5) { //*Here you can use for loop (Kyonki humein pata hai kaha se kaha tak print krna hai)
//     if (n > 0) {
//         positive++;
//     }
//     n = +prompt("Enter a number")
//     count++;

// }
// console.log(positive);



/* 19. ATM Simulator – Allow 3 withdrawals
Start with ₹1000 balance. Ask withdrawal amount 3 times.
If enough balance → deduct
Else → print “Insufficient balance” */

/*
 let counter = 0;
let balance = 3500;


let deduct = +prompt('Kitna lena hai paisa');
counter++

while (balance > 0 && deduct >= 1000) {

    if (deduct <= balance) {
        balance -= deduct;
    } else {
        console.error("Insufficient Balance");
        break;
    }
    if (counter === 3) {
        break;
    }
    deduct = +prompt('Kitna lena hai paisa');
    counter++
}
console.log(`Total  Balance is: ${balance}`);
*/