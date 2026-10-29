* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'helvetica neue';
}

html,
body {
    height: 100%;
    width: 100%;
}

body {
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
}


.box{
    height: 200px;
    width: 200px;
    transition: all .3s linear;
}

.box:hover{
    transform: scale(1.2) !important;

}

//Parent selector hota hai :has
//Agar body mein (.hox:hover) ho to .box pe ye code chalao
body:has(.box:hover) .box{
    transform: scale(0.8);
}


.red{
    background-color: rgb(139, 25, 25);
}


.blue{
    background-color: rgb(16, 16, 101);
}
.green{
    background-color: rgb(19, 92, 19);
}

