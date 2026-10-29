### This is How Fetch work Behind the Scene [getNum() k jagah pe Fetch naam image karlo]

```js

function getNum(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)
            if(num>5){
                resolve(num);
            }
            else{
                reject(num);
            }
        },2000)
    })
}


async function abcd(){   
    let v = await getNum();
    console.log(v);
}

abcd();
```
___