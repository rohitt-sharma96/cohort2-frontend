# units :-

## Absolute Units:
it is also known as the fixed units.

Units       Description                          Example

-px         Pixels(device specific dots)        16px
-pt         Print(1/72 inch, mostly in print)   12pt
-cm         Centimeters                         2cm
-mm         Millimeters                          5mm
-in         Inches                              6in

## Relative Units:
This units based on something {jo kisi cheez (units, heights, width) pe depend kare}
It is changes their size dynamically according the their speciality.


Unit                    Relative to                             Example

em                      it's own font size                       1.5em
rem                     Root elements font size                  2rem
%                       Parent elements size(width/height)       50%
vw                      1% of viewport width                     5vw
vh                      1% of viewport height                    8vh
vmin
vmax
ch
ex






100vw  ==>  full viewport width  ==>  500px (view port's)
100vw ==> 500px (view port's) 


## rem:-
stands for "root em"
Relative to: the root (html) font-size.
Used for 
    Margin,paddings(between sections)


## em:-
Relative to the font size of its own nearest ancestor(parent) [defined font size].
Use for
    Button padding relative to its own text size
    Icons or spacing inside components


## %:-
Relative to:- the the size of the parent  (for width/height, padding/margin)
Use for:-
    Flexible widths, heights

-- parent elements ke dimension pe
