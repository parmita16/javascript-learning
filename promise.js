const titanMission = new Promise((resolve, reject) => {
  let gateProtected = true;

  setTimeout(() => {
    if (gateProtected) {
      resolve("Wall Maria is safe!");
    } else {
      reject("Titans breached the wall!");
    }
  }, 2000);
});

console.log("Mission started...");

titanMission
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Failure:", error);
  });

console.log("Scouts are preparing...");


