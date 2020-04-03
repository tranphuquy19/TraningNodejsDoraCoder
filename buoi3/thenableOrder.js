let myPromise = new Promise((resolve, reject) => {
    reject('Error!');
});

myPromise
    .then(result => console.log(`then first: ${result}`))
    .then(
        result => console.log(`then second success: ${result}`),
        error => console.log(`then second error: ${error}`))
    .then(result => console.log(`then third: ${result}`));