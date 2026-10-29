// 4 Pillar of DOM 

/*
1.Selection 
2.Changing CSS
3. Changing HTML 
4. Event Listeners 
*/

let arr = [
    {
        team: "CSK",
        primary: "yellow",
        secondary: "green"
    },
    {
        team: "RCB",
        primary: "red",
        secondary: "black"
    },
    {
        team: "MI",
        primary: "Blue",
        secondary: "gold"
    },{
        team: "KKR",
        primary: "purple",
        secondary: "gold"
    }
]

let main = document.querySelector('main')
let btn = document.querySelector('button')
let h1  = document.querySelector('h1')

btn.addEventListener('click', ()=>{
    let winner = arr[Math.floor(Math.random()*arr.length)]
    // console.log(winner);
    
    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.primary
    main.style.backgroundColor = winner.secondary

})

/* 
fullname:
trophies:
captain */


/* 
TASK -
Make a IPL 2026 winner guessing game 

Display all the content which are available in a TEAM 

*/
