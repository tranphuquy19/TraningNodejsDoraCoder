let myPromise = new Promise((resolve, reject) => {
    reject('Error!');
});

myPromise
    .then(
        result => console.log(result),
        error => console.log(error))
    .catch(error => console.log(`error in catch: ${error}`));