//your JS code here. If required.
// Create an array of 5 promises
const promises = Array.from({ length: 5 }, () =>
  new Promise((resolve, reject) => {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Reject with an error 50% of the time
      reject(new Error('Promise rejected'));
    } else {
      // Resolve with a random number between 1 and 10 the other 50% of the time
      resolve(Math.floor(Math.random() * 10) + 1);
    }
  })
);

// Wait for all promises to settle
Promise.all(promises)
  .then((results) => {
    // Log the array of results or errors
    results.forEach((result, index) => {
      if (result instanceof Error) {
        console.log(`Promise ${index + 1} rejected with error`);
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += `<p>Promise ${index + 1} rejected with error</p>`;
      } else {
        console.log(`Promise ${index + 1} resolved with ${result}`);
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += `<p>Promise ${index + 1} resolved with ${result}</p>`;
      }
    });
  })
  .catch((error) => {
    console.log(`Promise.all rejected with error: ${error.message}`);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>Promise.all rejected with error: ${error.message}</p>`;
  });

