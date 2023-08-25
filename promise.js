const promise = new Promise((resolve) => {
  console.log("Promise created");
  setTimeout(() => {
    console.log("setTimeout callback");
  }, 1500); // setTimeout with a delay of 1 second
  resolve("Promise resolved");
});

promise.then((result) => {
  console.log(result);
});

console.log("End of script");