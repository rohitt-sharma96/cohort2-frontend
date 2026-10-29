#Introduction of DOM - FrontEnd ki JS
Document Object Model 

## 4 Pillars of DOM
- Selection of an Element
- Changing Element
- Changing Css
- Eventlisteners

### Selection 
let h1 = document.querySelector('h1') 
                                '#IdName'
                                '.className'

-     99% of times used :-
    querySelector() 
    querySelectorAll()   

-     1% of times used:0-
     getElementById() 


### Changing Element

h1.innerHTML = 'changed';           // changed 
h1.innerHTML = '<i> changed <i>';  // changed 

h1.textContent = '<i> changed <i>'; //'<i> changed <i>'


### Change CSS
h1.style.color = 'red'
h1.style.backgroundColor = 'white'
