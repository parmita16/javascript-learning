class ChakraError extends Error {
  constructor(message) {
    super(message);

    this.name = "ChakraError";
  }
}

try {
  let chakra = 20;

  if (chakra < 50) {
    throw new ChakraError(
      "Not enough chakra for Rasengan!"
    );
  }

  console.log("Rasengan Activated!");
} catch (error) {
  console.log(error.name);

  console.log(error.message);
}




