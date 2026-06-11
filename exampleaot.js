// Promise
const titanBattle = new Promise((resolve, reject) => {
  const won = true;

  setTimeout(() => {
    won
      ? resolve("Eren defeated the Titan!")
      : reject("Titan attack failed!");
  }, 2000);
});
// .then() and .catch()
titanBattle
  .then(result => console.log(result))
  .catch(error => console.log(error));
// async function
async function scoutReport() {
  try {
    // fetch data
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    // convert to JSON
    const data = await res.json();
    console.log("\nArmin's Report:");
    console.log(data.setup);
    console.log(data.punchline);

  } catch (error) {
    console.log("Report lost!", error);
  }
}
// call async function
scoutReport();
console.log("Mikasa is fighting...");
console.log("Levi is attacking Titans...");

