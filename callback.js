// Callback Function
function greet(name) {
    console.log("Hello, " + name);
}

function processUser(callback) {
    callback("Luffy");
}
processUser(greet);

// Callback with Arrow Function
function processStudent(callback) {
    callback("Zoro");
}

processStudent((name) => {
    console.log("Welcome, " + name);
});