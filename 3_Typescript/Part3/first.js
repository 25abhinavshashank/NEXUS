"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const c1 = {
    name: "Abhi",
    roll: 23,
    adhar: 123,
};
const c2 = {
    name: "abhi",
    age: 23
};
let arr = [{ name: "an", age: 20 }, { name: "abc", age: 32 }];
function greet(a) {
    console.log(a);
    return (a + 5);
}
console.log(greet(10));
function meet(name, age) {
    console.log(name + age);
}
meet("Abhi", 20);
// default parameter
function neet(name = "abhinav") {
    console.log(name);
}
neet();
neet("shashank");
// optional parameter
function gate(person) {
    console.log(person || "Mohan");
}
gate("asz");
gate();
// Arrow function
const sum = (num2, num1) => {
    return (num2 + num1);
};
console.log(sum(10, 20));
//call back function
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
// rest parameter
function total(...arr) {
    let ans = 0;
    arr.forEach(val => {
        ans = ans + val;
    });
    console.log(ans);
}
total(1, 2, 3, 4, 5, 6, .7, 8);
//# sourceMappingURL=first.js.map