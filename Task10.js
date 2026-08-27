function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    // Validate that the input is a non-negative number
    if (typeof seconds !== 'number' || seconds < 0) {
      reject(new Error('seconds must be a non-negative number'));
      return;
    }

    // Resolve the promise after a 1-second delay
    setTimeout(() => resolve(seconds), 1000);
  });
}

// Testing the function
checkTimeLeftPromise(5)
  .then(t => console.log(`[promise] Time left reported: ${t}s`))
  .catch(err => console.error('[promise] Error:', err.message));
