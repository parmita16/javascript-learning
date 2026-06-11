function ramen(flavor) {
  let bowls = 0; // closure variable

  return function serve(customer) {
    bowls++;

    console.log(
      `${customer} bought a ${flavor} ramen `
    );
    console.log(`Total ${flavor} ramen sold: ${bowls}`);
  };
}
const spicy = ramen("Spicy");
const miso = ramen("Miso");

spicy("Naruto");
spicy("Sasuke");

miso("Sakura");
miso("Kakashi");

