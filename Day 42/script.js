let h1 = document.querySelector('h1')

let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')

let n = 0;
inc.addEventListener('click',()=>{
    
    n++;
    h1.innerHTML = n;
})

dec.addEventListener('click',()=>{
    
    n--;
    h1.innerHTML = n;
})
