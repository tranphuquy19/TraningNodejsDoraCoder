let getDataFromServer = new Promise((resolve, reject) => {
    resolve('Success!');
});

myPromise
    .then(result => new Promise((resolve, reject) => { // new thêm 1 thằng myPromise2 (thứ 2)
        console.log(`then first: ${result}`);
        reject(result);
    }))
    .then(
        result2 => console.log(`then second result2: ${result2}`),
        error => new Promise((resolve, reject) => {
            console.log(`then second error: ${error}`);
            resolve(error);
        }))
    .then(result3 => console.log(`Then 3rd: ${result3}`))
    .catch(error => console.log(`Error: ${error}`));