let myPromise = new Promise((resolve, reject) => {
    resolve('Success!');
});

myPromise
    .then(result => console.log(`then first: ${result}`))
    .then(result => console.log(`then second: ${result}`))
    .then(result => console.log(`then third: ${result}`));