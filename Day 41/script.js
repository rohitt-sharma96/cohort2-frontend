//* Q.1 Write a higher-order function runTwice(run) that takes another function and executes it two times.

function runTwice(run) {
    run();
    run();
}

// runTwice(function run(){
//     console.log("Running")
// })



//* Q.2 Create one pure function that always returns the same output for given input, and one impure function using a global variable.

function pureFun(a, b) {
    return a + b;
}
// console.log(pureFun(8,8))
// console.log(pureFun(8,8))


let n = 10;
function impureFun(val) {
    n++;
    console.log(n + val)
}
// impureFun(5);
// impureFun(5);

//* Q.3 Write a function that uses object destructuring parameters to extract and print name and age.

function objj({ name1, age }) {
    console.log(name1, age)
}

// objj({ name1: "Rohit", age: 22 });



//* Q.4 Demonstrate the difference between normal function and arrow function when used as object methods (this issue).

let obj = {
    name: "Rohit",
    age: 22,
    fnc: function () {
        // console.log(this)
        let fnc2 = () => {
            console.log(this)
        }
        fnc2();
    },

}
// obj.fnc()


//* Q.5 Given and array of numbers, use map() to create a new array where each number is squared.

// let arr = [2, 3, 4, 5, 6];
// let arr2 = arr.map((val) => {
//     return val ** 2
// })

//* Q.6 Use filter() to get only even numbers from an array.

// let arr3 = arr.filter((val)=>{
//    return val % 2 == 0;
// })


//* Q.7 Use reduce() to find the total salary from an array of numbers [1000, 2000, 3000]

// let salaray = [1000,2000,3000];
// let sm = salaray.reduce((acc,val)=>{
//     return acc+val
// },0)

//* Q.8 Create an array of names and use some() and every() to test a condition (e.g., all names longer than 3 chars)

let names = ["Rohit", "Om", "Pankaj", "rav"];

// let ans = names.every((val) => {
//     if (val.length > 3 ) return true;
// })


//* Q.9 Creat an object user and test the behavior of Object.freeze() and Object.seal() by adding/changing keys.


let obj1 = {
    name: "Rohit",
    age: 22
}

// Object.seal(obj1);
// Object.freeze(obj1);
// obj1.name = "Rohini";


//* Q.10 Create a nested object (user -> address -> city) and access the city name inside it.

let user = {
    name: "harsh",
    address: {
        city: "Bhopal"
    }
}
let {city} = user.address;
// console.log(user.address.city)

