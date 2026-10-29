function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


/* function getRandomColor(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return `rgb(${r}, ${g}, ${b})`
}

console.log(getRandomColor())


let box = document.querySelector('#box')
let btn = document.querySelector('button')

btn.addEventListener('click', ()=>{
    box.style.backgroundColor = getRandomColor()
}) */