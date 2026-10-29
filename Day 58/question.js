//* Q.1 Create a user objects that stores name and email and has a login method which prints "User Logged in".

// let user = {
//     name: 'harsh',
//     email: 'harsh@mail.com',
//     login: ()=>{
//         console.log("User Logged in");
//     }
// }

// user.login();

//* Q.2 Imagine you now have 5 users. First think how would you manage them without using a class. Then convert the same logic using a class observe how the code becomes cleaner. Write codes for both approaches.
// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     loggedin() {
//         console.log("user logged in.");

//     }
// }

// let u1 = new User('ram', 'ram@mail.com');
// let u2 = new User('rohit', 'rohit@mail.com');
// let u3 = new User('pankaj', 'pankaj@mail.com');
// let u4 = new User('harsh', 'harsh@mail.com');
// let u5 = new User('sarthak', 'sarthak@mail.com');

//* Q.3 Creat a product object that stores name and price and has a method which return final price after discount.

// let product = {
//     productName : 'nike',
//     price: 23000,
//     disc:function(per){
//          return (per * this.price/100)
//     }
// }

//* SECTION - 2
//* Q.1 Create a class Car with the following:
//* brand
//* speed
//* a drive method that prints the car brand and speed.
// class Car{
//     constructor(brand,speed){
//         this.brand= brand;
//         this.speed= speed;
//     }

//     drive(){
//         return (` ${this.brand} - ${this.speed}km/h`);
        
//     }
// }

// let c1 = new Car('Hyundai', 180);
// let c2 = new Car('Tata', 190);

//* SECTION - 3 Constructor and this keyword

//* Create a Student class whose constructor accepts name and rollnumber
//* Add a method introduce that prints both values.


//* Inside a constructor set values using this.
//* Then try removing this and notice what errors occurs and why.


//* The goal is to clearly understand how this works and when it 
// class Student{
//     constructor(name, rollNo){
//         this.name = name;
//         this.rollNo = rollNo;
//     }

//     introduce(){
//         return (`The student name is ${this.name} and his rollNo. is ${this.rollNo}`);
//     }
// }

// let s1 = new Student('rohit', 160);


//* Create a object using two methods:
//* One method using a normal function
//* Second method using a arrow function

//* Inside both, print [this] keyword and observer the difference.

// let obj ={
//     fun: function(){
//         console.log(this,'obj');
        
//     },

//     fun2 : ()=>{
//         console.log(this,'window');
        
//     }
// }
// obj.fun()
// obj.fun2()

//* Section-4 Constructor Functions and Prototypes

//* Create a user contructor functions (do not use class syntax).

//* Add a login method in two ways
//* First inside a constructor
//* Then, move the method to the prototype

//* Create two user objects and compare their login methods using equality.
//* Explain why the result is true or false.
// function User(age){
//     this.name = "Lion";
//     this.age = age    
// }

// User.prototype.loggedIn = function(){
//     console.log("Used Logged in");
// }

// let a1 = new User(55);
// let a2 = new User(25);

//* Section 5: call, apply, bind
//* Create a function that prints (this.name)

//* Create an object that contains name property.

//* Use call to run the function using the object.
//* Use apply to run the function using the object.
//* Use bind to create a new function and then call it.

//* Borrow a method from one object and run it for another object using call.


let obj = {
    name: 'Harsh'
}

function abcd(a,b,c){
    console.log(this.name);
}

// abcd.call(obj);
// abcd.apply(obj,[1,2,3])
// let res = abcd.bind(obj);
// res();





