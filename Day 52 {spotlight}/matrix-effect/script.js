let para = document.querySelector('p')

const text = para.textContent;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

let iteration = 0;

para.addEventListener('mouseenter', (dets) => {

   let clrInt =  setInterval(() => {

        let str = text.split("").map((char, idx) => {
            if (idx < iteration) {
                console.log(idx, iteration);

                return char;
            }
            return characters.split("")[Math.floor(Math.random() * 52)]
        }).join("");

        para.textContent = str

        iteration += .4;
    }, 30)


    setTimeout(()=>{
        iteration = 0;
        clearInterval(clrInt)
    },30*100)
})







