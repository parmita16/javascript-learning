const person = {
    name: "Luffy",
    age: 19,
    country: "Japan"
};
// Spread operator (copy object)
const copiedPerson = { ...person };
console.log(copiedPerson);
// Spread operator (merge objects)
const extraInfo = {
    role: "Pirate"
};
const mergedPerson = {
    ...person,
    ...extraInfo
};
console.log(mergedPerson);
// Rest operator
const { name, ...remainingInfo } = person;
console.log(name);
console.log(remainingInfo);
// Object method
const student = {
    name: "Zoro",
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
};
student.greet();