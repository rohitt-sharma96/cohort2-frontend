// this keyword




// global -> window 
// function -> window
// obj => es5 -> obj
// obj => es6 -> window

//obj => es5 => es6 -> obj

let obj = {
    name: 'harsh',
    age: 27
}
function abcd( ){
    console.log(this,);
    
}
// abcd.call(obj);  //* call

// abcd.apply(obj,[1,2,3]) //* apply


// let fun = abcd.bind(obj) //* bind
// fun();