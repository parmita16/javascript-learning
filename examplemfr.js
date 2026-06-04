// Product prices
const prices = [100, 200, 300];

// Add 10% tax (map)
const newPrices = prices.map(price => price * 1.1);
console.log("Prices with tax:", newPrices);

// Student marks
const marks = [35, 80, 25, 90, 40];

// Keep passing marks (filter)
const passed = marks.filter(mark => mark >= 40);
console.log("Passed students:", passed);

// Shopping bills
const bills = [100, 250, 150];

// Calculate total bill (reduce)
const total = bills.reduce((sum, bill) => sum + bill, 0);
console.log("Total bill:", total);