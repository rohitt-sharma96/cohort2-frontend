//* Recurssion in JavaScript
/* 
function abcd(n){
    if(n ==6)  return;
    console.log(n)
    n++;
    abcd(n)
}
abcd(1) 
*/

/*
*  Continue in loop
for(let i = 0; i<21; i++){
    if(i === 10) continue;
    console.log(i)
}
*/


function doSomething(name, age, email){
console.log(arguments)
}

doSomething('harsh', 27, 'harhs@email.com')