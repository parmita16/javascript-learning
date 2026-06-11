const denji = {
  name: "Denji",
  devil: {
    name: "Pochita"
  }
};
// Template Literal
console.log(`Hello, I'm ${denji.name}!`);

// Optional Chaining
console.log(`My devil is ${denji?.devil?.name}`);

// Nullish Coalescing
let weapon = null;
console.log(`Weapon: ${weapon ?? "Chainsaw"}`);

// Logical Assignment
let mission = "";
mission ||= "Hunt Devils";
console.log(`Mission: ${mission}`);
// Short-Circuit Evaluation
const isDevilHunter = true;
isDevilHunter && console.log("Denji starts the mission!");
