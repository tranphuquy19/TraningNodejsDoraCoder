let myPromise = new Promise((resolve, reject) => {
    reject('Error!');
});

myPromise
    .then(result => console.log(`then first: ${result}`))
    .then(result => console.log(`then second: ${result}`))
    .then(result => console.log(`then third: ${result}`))
    .catch(error => console.log(`catch: ${error}`));