// One Piece Crew Data
const strawHats = [
    { name: "Luffy", role: "Captain", bounty: 3000000000 },
    { name: "Zoro", role: "Swordsman", bounty: 1111000000 },
    { name: "Nami", role: "Navigator", bounty: 366000000 },
    { name: "Sanji", role: "Cook", bounty: 1032000000 }
];

// find()
const pirateCaptain = strawHats.find(
    member => member.role === "Captain"
);

// some()
const hasCaptain = strawHats.some(
    member => member.role === "Captain"
);

// every()
const allWanted = strawHats.every(
    member => member.bounty > 100000000
);

// flatMap()
const roleLetters = strawHats.flatMap(
    member => member.role.split("")
);

// Object destructuring + rename
const { name: captainName, bounty } = pirateCaptain;

// Spread operator
const jinbe = {
    name: "Jinbe",
    role: "Helmsman",
    bounty: 1100000000
};

const updatedCrew = [...strawHats, jinbe];

// Rest operator
const { name, ...details } = jinbe;

// Object method
const crewInfo = {
    crewName: "Straw Hat Pirates",
    introduce() {
        console.log(`Welcome to the ${this.crewName}!`);
    }
};

crewInfo.introduce();

console.log("Pirate Captain:", captainName, bounty);
console.log("Has captain?", hasCaptain);
console.log("Everyone wanted?", allWanted);
console.log("Role letters:", roleLetters.slice(0, 10));
console.log("Updated crew size:", updatedCrew.length);
console.log("Rest operator:", details);