var person = /** @class */ (function () {
    function person(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
    person.prototype.greet = function () {
        console.log("hii,".concat(this.name));
    };
    return person;
}());
var obj1 = new person("Abhi", 22);
console.log(obj1);
var obj2 = new person("Sayan", 2);
console.log(obj2);
