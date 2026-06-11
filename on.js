// Nullish Coalescing (??)
let username = null;
console.log(username ?? "Guest"); // Guest

let score = 0;
console.log(score ?? 100); // 0

// Logical Assignment (||=)
let country = "";
country ||= "Nepal";

console.log(country); // Nepal

// Short-Circuit Evaluation (&&)
const isLoggedIn = true;
isLoggedIn && console.log("Welcome Back!");

const isAdmin = false;
isAdmin && console.log("Admin Panel"); // won't run because it's false
