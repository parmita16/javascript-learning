// 1. Function that returns another function
function outerFunction() {
    return function () {
        console.log("Hello from the returned function!");
    };
}
const innerFunction = outerFunction();
innerFunction();

// 2. Regular function
function add(a, b) {
    return a + b;
}
console.log(add(3, 4)); // 7

// 3. Arrow function version
const addArrow = (a, b) => a + b;
console.log(addArrow(3, 4)); // 7