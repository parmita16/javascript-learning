async function getUser() {
  try {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    let user = await response.json();

    console.log(user.name);
  } catch (error) {
    console.log("Fetch failed!");

    console.log(error.message);
  }
}

getUser();





