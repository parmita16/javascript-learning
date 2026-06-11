async function getJoke() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const data = await response.json();

    console.log("Joke Setup:", data.setup);
    console.log("Punchline:", data.punchline);
  } catch (error) {
    console.log("Error:", error);
  }
}

getJoke();

