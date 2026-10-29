//ek baar password define karo 
// let sahiPassword = "harsh"

// let count = 0;
// let flag = false;

//user se password puchho
// let userPassword = prompt("password");
// count++;

// if(userPassword === sahiPassword){
//     flag = true;
// }


//while loop chalao jo baar baar password puchhega
// while(count <= 3  && sahiPassword !== userPassword){
//     if(count === 3) {
//         console.error("Account locked");
//         break;
//     }
//     userPassword = prompt("password");
//     if(userPassword === sahiPassword){
//         flag = true;
//     }
//     count++;
// }

// if(flag){
//     console.log("You opened it.")
// }


//* Q. 2
// let word = prompt("word batao");
// let counter = 0;

// while (word !== "stop") {
//     if (word === "yes") counter++;
//     word = prompt("word batao");
// }
// console.log(`Total number of Yes print ${counter}`)


//* Q.3

// let n = prompt("enter a number");
// num = Number(n);
// while (n % 2 !== 0) {
//     n = prompt("enter a number");
//     num = Number(n);
//     console.log(n)
// }



//* Q.18 Ask user 5 numbers. Count how many are positive Use loop + condition + counter.
/*

let coun ter = 0;

for (let i = 1; i < 6; i++) {

    n = +prompt("Number dalo");

    if (n >= 0) {
        counter++;
        console.log(n);
    }

}
console.log(`Total positive number is: ${counter}`); 

*/


/* 
* 19  ATM Simulator – Allow 3 withdrawals
* Start with ₹1000 balance. Ask withdrawal amount 3 times.
* If enough balance → deduct
* Else → print “Insufficient balance” 
*/


let counter = 0;
let balance = 1000;

while (balance >= 0 && counter !== 3) {

    withdraw = +prompt("kitna nikalna hai");
    counter++;
    
    if (withdraw <= balance) {
        console.log(`Your withdrawal amount is : ${withdraw}`)
        balance -= withdraw;
    } 
    else {
        console.log("Insufficient Balance");
        break;
    }

}
console.log(`Total Balance is: ${balance}`)