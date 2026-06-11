const user = {
  name: "Parmita",
  age: 20,
  address: {
    city: "Kathmandu"
  }
};
// Template Literals
console.log(`Hello, my name is ${user.name} and I am ${user.age} years old.`);

// Optional Chaining
console.log(user?.address?.city); // Kathmandu

const user2 = {
  name: "Sanji"
};
console.log(user2?.address?.city); // undefined (no error because i used "?.")

