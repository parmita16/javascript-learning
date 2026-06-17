// ========================================
// WHAT I'M LEARNING:
// flat()
// map()
// filter()
// ========================================

// Nested anime episodes
const animeEpisodes = [
  ["Naruto Ep1", "Naruto Ep2"],
  ["Naruto Ep3", "Naruto Ep4"],
  ["Naruto Ep5"]
];

// Flatten the nested array
const allEpisodes = animeEpisodes.flat();

console.log("All Episodes:");
console.log(allEpisodes);

// Add numbering using map()
const numberedEpisodes = allEpisodes.map(
  (episode, index) => `${index + 1}. ${episode}`
);

console.log("\nNumbered Episodes:");
console.log(numberedEpisodes);

// Find episodes containing "3"
const searchResult = allEpisodes.filter(
  episode => episode.includes("3")
);

console.log("\nSearch Result:");
console.log(searchResult);