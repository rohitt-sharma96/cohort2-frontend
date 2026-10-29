### Arithmetic operator

    +  -  *  /  %  **

### Assignment Operator

    =  +=  -=   %=   *=

### Comparison Operator

    ==   ===   !=  !==  <  <=   >   >=

    ==   not strict  (avoid using)
    !=   not strict (avoid using)
    ===  strict (always use)
    !==  strict  (always use)

### Logical Operator

    &&   ||   ! ( ulta karta hai boolean value ko 
                      true ko false and false ko true)

### String Operator

    + (for concatenation of string)

    example - 'rohit' + 'sharma'   //rohitsharma

### Rest / Spread Operator

    rest     (function ke params mein)
    spread   (array and object)

    example of rest -  
    function abcd(...rest){
              rest.forEach(num for numbers){
                  console.log(num)
        }
    }



### Nullish and Coalescing Operator 
    ?? (fallback only when null / undefined)

    - isme agar pehli value null hui to ye dusri pe fallback kar jata hai.
    example - null ?? console.log("sorry")  // sorry


### Optional Chaining 
    ?. (safe access to nested values)

    let obj = {
   
}

obj?.name?.sirName?.sf  ( ?. - this will prevent the error)


### Variable Hoisting in Js.

  - hoisting ka matlab hai ki variable ko banane se pehle bhi use kiya ja sakta hai 
  - Hoisting me aapka variable do hissor mein toot jaata hai

  ex - var b = 12;
        var b;
        b = 12;

 *** Temporal Dead Zone (TDZ)  ***

   - variable declare karne ke baad uske 
   - upar wala pura area temporal dead zone hota 
   - uske beech mein aap apne variable ko use nhi kar skte
   - agar aap use krte ho to error aata hai bcz of (tdz)