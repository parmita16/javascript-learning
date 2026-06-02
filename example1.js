//Easy Example Practice
// 1. Arrow function that returns the square of a number
const square = (num) => num * num;

console.log(square(5)); // 25
// 2. Function with a default parameter age = 18
function showAge(age = 18) {
    console.log("Age:", age);
}
showAge(); // Age: 18
showAge(20); // Age: 20
// 3. Callback function that prints "Welcome!"
function greet(callback) {
    callback();
}
function welcome() {
    console.log("Welcome!");
}
greet(welcome);