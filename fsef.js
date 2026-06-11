const numbers = [10, 20, 30, 40, 50];

// find()
const found = numbers.find(num => num > 25);
console.log("find:", found);

// some()
const hasLargeNumber = numbers.some(num => num > 45);
console.log("some:", hasLargeNumber);

// every()
const allPositive = numbers.every(num => num > 0);
console.log("every:", allPositive);

// flat()
const nestedArray = [1, 2, [3, 4], [5, 6]];
console.log("flat:", nestedArray.flat());

// flatMap()
const words = ["hi", "hello"];
const letters = words.flatMap(word => word.split(""));
console.log("flatMap:", letters);