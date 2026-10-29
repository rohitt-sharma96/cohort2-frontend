let arr = ['Sheryians is best', 'Js is love ', 'Harsh bhaiya is great', 'Hey I am Rohit Sharma', 'I like Bodybuilding', 'He is great ', 'Full-Stack is awesome']

let main = document.querySelector('main')
let btn = document.querySelector('button')

btn.addEventListener('click', () => {
    let h1 = document.createElement('h1')
    let x = Math.floor(Math.random() * 80)
    let y = Math.floor(Math.random() * 80)
    let a = Math.floor(Math.random() * arr.length)


    let rot = Math.floor(Math.random() * 361)
    let scl = Math.floor(Math.random() * 3)
    scl = scl <= 0 ? scl = 1 : scl;

    h1.textContent = arr[a];

    h1.style.position = 'absolute';
    h1.style.left = x + '%'
    h1.style.top = y + '%'
    h1.style.rotate = rot + 'deg';
    h1.style.scale = scl
    console.log(h1);

    main.append(h1)
})