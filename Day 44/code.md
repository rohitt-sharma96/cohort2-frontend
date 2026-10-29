let main = document.querySelector('main')
let btn = document.querySelector('button')



btn.addEventListener('click',()=>{
    let div = document.createElement('div')

    let x = Math.random()*100
    let y = Math.random()*100
    let ro = Math.random()*361;

    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256);




    div.style.height = '100px'
    div.style.width = '100px'
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
    div.style.position = 'absolute';
    div.style.left = x+'%'
    div.style.top = y+'%'
    div.style.rotate = ro+'deg'

    main.appendChild(div)
    
})