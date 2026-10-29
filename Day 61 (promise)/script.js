let prm = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved');
    }, 2000);
})

prm
.then((data) => {
    console.log(data); 
})
.catch(() => {
    console.log('reject');

})


fetch('https://randomuser.me/api/')
.then( (rawData) => rawData.json())
.then((data)=>{
    console.log(data.results[0]);
})
.catch((err)=>{
    console.log(err);
    
})


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