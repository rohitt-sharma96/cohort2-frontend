class Human {
    constructor() {
        this.name = 'ram';
        this.age = 55;
    }


}


    
Human.prototype.khanaKhao = function(){
    console.log("Khana Khaya...");

}

Human.prototype.paaniPiya = function () {
    console.log("Paani Piyaa...");
}

let h1 = new Human();
let h2 = new Human();