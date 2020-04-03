let getAPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
});

let getBPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 5000);
});

let tinhC = Promise
    .all([getAPromise, getBPromise])
    .then(results => {
        const [a, b] = results;
        console.log(`C is: ${a + b}`);
    });

