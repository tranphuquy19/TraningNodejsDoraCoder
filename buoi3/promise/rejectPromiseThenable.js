let myPromise = new Promise((resolve, reject) => {
    reject('Error!');
});

myPromise
    .then(
        result => console.log(result),
        error => console.log(error))
    .catch(error => console.log(`error in catch: ${error}`));


// myPromise.then(function (ketQua) { // su dung promise
//     console.log(ketQua);
// }).catch(function (error) {
//     console.log(error);
// })


// myPromise
//     .then(function (result) {
//         console.log(result)
//     }, function (error) {
//         console.log(error)
//     }).catch(function (error) {
//         console.log(`error in catch: ${error}`);
//     });