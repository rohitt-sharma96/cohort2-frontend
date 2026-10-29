## TIP - Explanation of Callback 
- Function bane kahi bhi ho lekin call nested (ek ke andar ek) format mein hi honge 
- Jo main function hota hai(Server pe hota hai) waha pe callback ko as parameter pass krte hai. And mein function ke andar hi callkrte hai callback ko(isme argument/value bhi bhej skte hai )
- jaha call karte hai wahi callback function ko declare karte hai(isi mein value receive karte hai)

### Callback Level - 1

 Exercise 1: Very Easy (Warming up) 
  Ek function banaao after delay
  Requirements:
  Ye function 2 cheeze lega
  time in milliseconds
  callback function
  Given time k baad callback call kare
  Callback ke andar "Callback Executed" print hona chahiye
  Use case socho:
  "2 second baad ek kaam karna hai"
  Goal:
  Samajhana ki callback delay ke baad kaise execute hota hai
  Ye setTimeout + callback connection hai

#### Question 1:
```js
 function afterDelay(time,callback){
     setTimeout(()=>{
         console.log('afterDelay run');
        callback('Callback Executed')

     },time)
 }

 //Function Call
 afterDelay(2000,function(data){
     console.log(data);
 })

```

### Callback Level - 1 [END]


### Callback Level - 2

 ***Ek function banao getUser*** 

 Requirements:-
- Username lega
- 1second ke baad callback ko obj dega:
- id 
- username
- Then:
- Callback ke andar ek aur function call karo getUserPosts
- getUserPosts: 
- userId lega
- 1second ke baad callback ko post ka array do
- Final output:
- User ka username print ho
- Fir uske post print ho
- Goal: 
- Samjhana ki ek async ka result next async ko kaise milta hai


```js


function instagramseDataLao(username,cb){
    console.log('Fetching data from Instagram...');
    setTimeout(() => {
        cb({id:1,username:username})
    }, 1000);
}

function metaseImagesLao(id,cb){
    console.log('Fetching images from Meta...');
    
    setTimeout(() => {
        cb(['img1','img2'])
    }, 2000);
}

//Function call
instagramseDataLao('harsh',function(data){
    console.log(data);
        metaseImagesLao(data.id,function(images){
            console.log(images);
        });
})
```


### Level - 2 [END]