
let A1 = new Audio('./Audi/A1.mp3');
let A2 = new Audio('./Audi/A2.mp3');
let A3 = new Audio('./Audi/A3.mp3');
let A4 = new Audio('./Audi/A4.mp3');
let A5 = new Audio('./Audi/A5.mp3');
let A6 = new Audio('./Audi/A6.mp3');
let A7 = new Audio('./Audi/A7.mp3');
let C1 = new Audio('./Audi/C1.mp3');
let C2 = new Audio('./Audi/C2.mp3');
let C3 = new Audio('./Audi/C3.mp3');
let C4 = new Audio('./Audi/C4.mp3');
let C5 = new Audio('./Audi/C5.mp3');
let C6 = new Audio('./Audi/C6.mp3');
let C7 = new Audio('./Audi/C7.mp3');
let C8 = new Audio('./Audi/C8.mp3');

let Ds1 = new Audio('./Audi/Ds1.mp3');
let Ds2 = new Audio('./Audi/Ds2.mp3');
let Ds3 = new Audio('./Audi/Ds3.mp3');
let Ds4 = new Audio('./Audi/Ds4.mp3');
let Ds5 = new Audio('./Audi/Ds5.mp3');
let Ds6 = new Audio('./Audi/Ds6.mp3');
let Ds7 = new Audio('./Audi/Ds7.mp3');
let Fs1 = new Audio('./Audi/Fs1.mp3');
let Fs2 = new Audio('./Audi/Fs2.mp3');
let Fs3 = new Audio('./Audi/Fs3.mp3');
let Fs4 = new Audio('./Audi/Fs4.mp3');
let Fs5 = new Audio('./Audi/Fs5.mp3');
let Fs6 = new Audio('./Audi/Fs6.mp3');
let Fs7 = new Audio('./Audi/Fs7.mp3');

let a = document.querySelector('.KeyA')
let B = document.querySelector('.KeyB')
let C = document.querySelector('.KeyC')
let D = document.querySelector('.KeyD')
let E = document.querySelector('.KeyE')
let F = document.querySelector('.KeyF')
let G = document.querySelector('.KeyG')
let H = document.querySelector('.KeyH')
let I = document.querySelector('.KeyI')
let J = document.querySelector('.KeyJ')
let K = document.querySelector('.KeyK')
let L = document.querySelector('.KeyL')
let M = document.querySelector('.KeyM')
let N = document.querySelector('.KeyN')
let O = document.querySelector('.KeyO')
let P = document.querySelector('.KeyP')
let Q = document.querySelector('.KeyQ')
let R = document.querySelector('.KeyR')
let S = document.querySelector('.KeyS')
let T = document.querySelector('.KeyT')
let U = document.querySelector('.KeyU')
let V = document.querySelector('.KeyV')
let W = document.querySelector('.KeyW')
let X = document.querySelector('.KeyX')
let Y = document.querySelector('.KeyY')
let Z = document.querySelector('.KeyZ')


document.body.addEventListener('keydown', (dets) => {
    console.log(dets)


    if (dets.key === 'a') {

        A1.currentTime = 0;
        A1.play();
        setTimeout(() => {
            a.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            a.style.backgroundColor = 'white'

        }, 100)
    }
    
    if (dets.key === 'b') {
        A2.play();
        A2.currentTime = 0;
        setTimeout(() => {
            B.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            B.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'c') {
        A3.play();
        A3.currentTime = 0;
        setTimeout(() => {
            C.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            C.style.backgroundColor = 'white'
        }, 500)

    }
    if (dets.key === 'd') {
        A4.play();
        A4.currentTime = 0;
        setTimeout(() => {
            D.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            D.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'e') {
        A5.play();
        A5.currentTime = 0;
        setTimeout(() => {
            E.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            E.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'f') {
        A6.play()
        A6.currentTime = 0;
        setTimeout(() => {
            F.style.backgroundColor = '#333'
        }, 10);

        setTimeout(() => {
            F.style.backgroundColor = 'white'
        }, 500);

    }
    if (dets.key === 'g') {
        A7.play();
        A7.currentTime = 0;
        setTimeout(() => {
            G.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            G.style.backgroundColor = 'white'
        }, 500)
    }
        if (dets.key === 'h') {
        A1.play();
        A1.currentTime = 0;
        setTimeout(() => {
            H.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            H.style.backgroundColor = 'white'
        }, 500)
    }



    if (dets.key === 'i') {
        C1.play();
        C1.currentTime = 0;
        setTimeout(() => {
            I.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            I.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'j') {
        C2.play();
        C2.currentTime = 0;
        setTimeout(() => {
            J.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            J.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'k') {
        C3.play();
        C3.currentTime = 0;
        setTimeout(() => {
            K.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            K.style.backgroundColor = 'white'
        }, 500)

    }
    if (dets.key === 'l') {
        C4.play();
        C4.currentTime = 0;
        setTimeout(() => {
            L.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            L.style.backgroundColor = 'white'
        }, 500)

    }
    if (dets.key === 'm') {
        C5.play();
        C5.currentTime = 0;
        setTimeout(() => {
            M.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            M.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'n') {
        C6.play();
        C6.currentTime = 0;
        setTimeout(() => {
            N.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            N.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'o') {
        C7.play();
        C7.currentTime = 0;
        setTimeout(() => {
            O.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            O.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'p') {
        C8.play();
        C8.currentTime = 0;
        setTimeout(() => {
            P.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            P.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'q') {
        Ds1.play();
        Ds1.currentTime = 0;
        setTimeout(() => {
            Q.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            Q.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'r') {
        Ds2.play();
        Ds2.currentTime = 0;
        setTimeout(() => {
            R.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            R.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 's') {
        Ds3.play();
        Ds3.currentTime = 0;
        setTimeout(() => {
            S.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            S.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 't') {
        Ds4.play();
        Ds4.currentTime = 0;
        setTimeout(() => {
            T.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            T.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'u') {
        Ds5.play();
        Ds5.currentTime = 0;
        setTimeout(() => {
            U.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            U.style.backgroundColor = 'white'
        }, 500)

    }
    if (dets.key === 'v') {
        Ds6.play();
        Ds6.currentTime = 0;
        setTimeout(() => {
            V.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            V.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'w') {
        Ds7.play();
        Ds7.currentTime = 0;
        setTimeout(() => {
            W.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            W.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'x') {
        Fs1.play();
        Fs1.currentTime = 0;
        setTimeout(() => {
            X.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            X.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'y') {
        Fs2.play();
        Fs2.currentTime = 0;
        setTimeout(() => {
            Y.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            Y.style.backgroundColor = 'white'
        }, 500)
    }
    if (dets.key === 'z') {
        Fs3.play();
        Fs3.currentTime = 0;
        setTimeout(() => {
            Z.style.backgroundColor = '#333'
        }, 10)
        setTimeout(() => {
            Z.style.backgroundColor = 'white'
        }, 500)
    }
})