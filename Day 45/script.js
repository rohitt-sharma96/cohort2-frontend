
let btn = document.querySelector('button')

let inner = document.querySelector('.inner')

let h2 = document.querySelector('h2')

let grow = 0;

btn.addEventListener('click', () => {
    btn.style.pointerEvents = 'none'

    let num = 50 + Math.floor(Math.random() * 50);
    console.log(num);
    



    let int = setInterval(() => {
        grow++;
        h2.textContent = `${grow}%`;
        inner.style.width = `${grow}%`;
    }, num)


    setTimeout(() => {
        clearInterval(int)
        btn.style.opacity = 0.5;
        btn.innerHTML = 'Downloaded';
        console.log(`Downloaded in ${num/10} seconds`);
        
    }, num * 100)




})
