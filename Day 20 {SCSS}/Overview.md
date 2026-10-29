### SCSS TOPIC

#### > Nesting

#### > Mixins

```js
   
    //* This is declared on top of your SCSS
    @mixin flexDisplay(){
        display: flex;
        align-items: center;
        justify-content: center
    }
    



    //Dynamic Property 
    @mixin btnColor($bg-color){  Here we can also set default value `($bg-color:red)`
    background-color: $bg-color;
  }

  btnColor(blue)

    //* Use this propety where you want to give display flex in your code
    @include flexDisplay();
  ```

#### > Partials & Imports

- Partials : small SCSS file (start with _) to split your code (e.g., `_header.scss` , `_footer.scss`)

- Import: `@import` to bring all partials file into one main file.

    e.g. - File hoga es naam se -> `_header.scss`
         - lekin import hoga es naam se -> `@import 'header'`;
