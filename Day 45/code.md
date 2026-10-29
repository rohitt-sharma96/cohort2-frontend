```js
 btn.addEventListener('click', ()=>{
    h1.textContent = 'Changing user...'
     setTimeout(()=>{
       h1.textContent = "Hii I am Rohit"
     },2000)
 })
 ```

```js
let a = 0;
let int  = setInterval(()=>{
    a++;
    console.log(a);
},10)


setTimeout(()=>{

    clearInterval(int)
},5000)  
```
