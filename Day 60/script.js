// TIP - Function bane kahi bhi ho lekin call nested (ek ke andar ek) format mein hi honge 
// Jo main function hota hai(Server pe hota hai) waha pe callback ko as parameter pass krte hai. And mein function ke andar hi callkrte hai callback ko(isme argument/value bhi bhej skte hai )
// --> jaha call karte hai wahi callback function ko declare karte hai(isi mein value receive karte hai)



// Exercise 1: Very Easy (Warming up) 
//  Ek function banaao after delay
//  Requirements:
//  Ye function 2 cheeze lega
//  time in milliseconds
//  callback function

//  Given time k baad callback call kare
//  Callback ke andar "Callback Executed" print hona chahiye

//  Use case socho:
//  "2 second baad ek kaam karna hai"

//  Goal:
//  Samajhana ki callback delay ke baad kaise execute hota hai
//  Ye setTimeout + callback connection hai
//* Question 1:
// function afterDelay(time,callback){
//     setTimeout(()=>{
//         console.log('afterDelay run');
//         callback('Callback Executed')

//     },time)
// }

// afterDelay(2000,function(data){
//     console.log(data);

// })








// Exercise 2 - Intermediate (data flow)
// Ek function banao getUser
// Requirements:
// Username lega
// 1second ke baad callback ko obj dega:
// id 
// username
// Then:
// Callback ke andar ek aur function call karo getUserPosts
// getUserPosts: 
// userId lega
// 1second ke baad callback ko post ka array do
// Final output:
// User ka username print ho
// Fir uske post print ho
// Goal: 
// Samjhana ki ek async ka result next async ko kaise milta hai

// function getUser(username, callback) {
//     console.log('Fetching user details...');
//     setTimeout(() => {
//         callback({ id: 1, username: username })
//     }, 1000);
// }

// function getUserPosts(id, callback) {
//     console.log('Fetching posts details...');
//     setTimeout(() => {
//         callback({ userId: id, posts: ['post1', 'post2', 'post3', 'post4'] });
//     }, 2000);
// }

// getUser('harsh', function (data) {
//     console.log(data);
//     getUserPosts(data.id, function (data) {
//         console.log(data);

//     });
// });


// Exercise  3  (Intermediate - callback dependency, thoda painful)

// 3 Function banao
// loginUser
// 1 second baad callback ko user object de
// fetchPermissions
// userId lega
// 1 second baad callback ko permission array de
// load Dashboard
// persmissions lega
// 1 second baad callback ko "Dashboard loaded" bole
// Flow:
// Pehle loginUser
// Uske andar fetchPermissions
// Uske andar loadDashboards
// Final output console mein print ho
// Goal:
// Callback nesting ko feel karna
// Yehi structure baad mein callback hell banta

function loginUser(user,cb){
    console.log("User loggin in...");

    setTimeout(() => {
        cb({id:1,user:user, age:22})
    }, 1000);
}
function fetchPermission(id,cb){
    console.log('Fetching user permissions...')
    
    setTimeout(() => {
        cb(['read','write','delete'])
    }, 1000);
}
function loadDashboard(permission,cb){
    console.log('Fetching user dashboard...');

    setTimeout(() => {
        
        cb('Permission Loaded');
    }, 1000);
}


loginUser('harsh',(Udata)=>{
    console.log(Udata);
    fetchPermission(Udata.id, (permission)=>{
        console.log(permission);
        loadDashboard(permission,(data)=>{
            console.log(data);
            
        })
    });
    
})












































































// function loginUser(user,cb){
//     console.log('Fetching user data');
    
//     setTimeout(() => {
//         cb({user:user, id:1, age:22, email:'rohit@mail.com'})
//     }, 1000);
// }

// function fetchPermission(userId,cb){
//     console.log('Fetching user array');
    
//     setTimeout(()=>{
//         cb([1,2,3,4,5,6]);
//     },1000)
// }

// function loadDashboards(permission, cb){
//     console.log('Waiting for permission');
    
//     setTimeout(() => {
        
//         cb("permission hai ",permission);
//     }, 1000);
    
// }


// loginUser('rohit',function(userData){
//     console.log(userData);
    
//     fetchPermission(userData.id, function(array){
//         console.log(array);
        
//             loadDashboards(true, (p)=>{
//                 console.log(p);
                
//             })
//     })
    
// })