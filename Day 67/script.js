import box from './app.js'


function h1(){
    return React.createElement('h1',null,'This is RealDOM')
}



let root = ReactDOM.createRoot(document.querySelector('#container'))

root.render(box())