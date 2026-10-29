class Man {
    constructor() {
        this._age = 12;
    }

    set setAge(val) {
        if (val < 0) {
            console.error('not possible')
            return;
        }
        this._age = val
    }

    get getAge() {
        return this._age;
    }
}


let m1 = new Man();
m1.setAge = 55

console.log(m1.get);



