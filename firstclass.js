// First-Class Functions
// Function stored in a variable
const sayHi = function() {
    console.log("Hi!");
};
sayHi();
// Function assigned to another variable
function greet() {
    console.log("Hello!");
}
const anotherGreet = greet;
anotherGreet();
// Function passed as an argument
function execute(func) {
    func();
}
execute(greet);
// Function returned from another function
function createMessage() {
 return function() {
        console.log("Welcome!");
    };
}
const message = createMessage();
message();