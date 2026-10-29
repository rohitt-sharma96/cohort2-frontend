//* Debounce :- Ye event ke dauran nhi chalega, jb event rukega tb chalta hai, event rukne ke kuch time (set kiya hua jo time hoga) baad ye chalta hai. 


// function debounce(fn, delay) {
//     let timer;
//     return function () {
//         clearTimeout(timer)
//         timer = setTimeout(fn, delay)
//     }
// }

// let inp = document.querySelector('#search');

// inp.addEventListener('input', debounce(function () {
//     console.log('debounce chala');

// }, 400)
// );




//* Throttle:- Throttle event ke dauraan hi chalta hai jb event rukta hai to ye bhi ruk jaata hai, 
//* Event ke chalne ke dauran (kuchh time set krte hai ) usi specific time mein chalta hai


function throttle(fn, delay) {
    let last = 0;

    return function () {

        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn();
        }
    }
}

window.addEventListener(
    'mousemove',
    throttle(function () {
        console.log('harsh');
    }, 2000)
);