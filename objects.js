const person = {
    name: "Luffy",
    age: 19,
    country: "Japan"
};
// Dot notation
console.log(person.name);
// Bracket notation
console.log(person["age"]);
// Object destructuring
const { name, age } = person;
console.log(name, age);
// Rename while destructuring
const { name: heroName } = person;
console.log(heroName);
// Array destructuring
const fruits = ["Apple", "Mango", "Orange"];
const [first, second] = fruits;
console.log(first);
console.log(second);