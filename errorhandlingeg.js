class NetworkError extends Error {
  constructor(message) {
    super(message);

    this.name = "NetworkError";
  }
}
async function getAnime(id) {
  try {
    console.log("Loading anime...");
    let response = await fetch(
      `https://api.jikan.moe/v4/anime/${id}`
    );
    if (!response.ok) {
      throw new NetworkError(
        "Anime could not be found!"
      );
    }
    let data = await response.json();
    console.log(" Success");
    console.log("Title:", data.data.title);
  } catch (error) {
    console.log(" Error State");
    console.log("Name:", error.name);
    console.log("Message:", error.message);
    console.log("Stack:", error.stack);
  } finally {
    console.log("Finished request.");
  }
}
getAnime(1);





