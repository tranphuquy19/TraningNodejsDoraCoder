let myPromise = new Promise((resolve, reject) => {
    resolve('Error!');
});

myPromise
    .then(result => console.log(`then first: ${result}`))
    .then(result => console.log(`then second: ${result}`))
    .then(result => console.log(`then third: ${result}`))
    .catch(error => console.log(`catch: ${error}`))
    .finally(lastCallResult => console.log(`last call result: ${lastCallResult}`)); //chỉ support Opera, Chrome, Firefox, Nodejs