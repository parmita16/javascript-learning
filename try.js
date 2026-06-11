try {
  let anime = "Naruto";

  anime.toFixed(2); // Strings don't have toFixed()
} catch (error) {
  console.log("Something went wrong!");

  console.log(error.message);
} finally {
  console.log("This always runs.");
}



