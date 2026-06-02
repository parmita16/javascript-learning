// Function Declaration
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Luffy"));
// Function Expression
const sayMorning = function(name) {
    return "Good Morning, " + name;
};
console.log(sayMorning("Zoro"));
// Arrow Function
const sayEvening = (name) => {
    return "Good Evening, " + name;
};
console.log(sayEvening("Nami"));
// Default Parameter
function welcome(name = "Guest") {
    return "Welcome, " + name;
}

console.log(welcome());        // Default value
console.log(welcome("Sanji")); // Given value