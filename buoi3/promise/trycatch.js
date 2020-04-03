async function trycatch() {
    try {
        let a = 5; let b = 0;
        await settimeout(5000);
        console.log(a/b);
    } catch (err) {
        console.log(err);
    }
}


function settimeout(ms){
    return new Promise(resolve => setTimeout(resolve(), ms))
}
trycatch();
// console.log((0.1 + 0.2) === 0.3); // ? thập phân -> binary 0.3 -> /2 lấy dư 16bits -> tuần hoàn của -> sai số