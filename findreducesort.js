const pirates = [
  { name: "Luffy", bounty: 3000000000 },
  { name: "Zoro", bounty: 1111000000 },
  { name: "Sanji", bounty: 1032000000 },
  { name: "Nami", bounty: 366000000 }
];
// Find Zoro
const zoro = pirates.find(
  pirate => pirate.name === "Zoro"
);
console.log("Found Pirate:");
console.log(zoro);
// Highest bounty
const highestBounty = pirates.reduce(
  (highest, pirate) =>
    pirate.bounty > highest.bounty
      ? pirate
      : highest
);
console.log("\nHighest Bounty:");
console.log(highestBounty);
// Total bounty
const totalBounty = pirates.reduce(
  (sum, pirate) => sum + pirate.bounty,
  0
);
console.log("\nTotal Bounty:");
console.log(totalBounty);
// Sort descending
const sortedPirates = [...pirates].sort(
  (a, b) => b.bounty - a.bounty
);
console.log("\nSorted Pirates:");
console.log(sortedPirates);
