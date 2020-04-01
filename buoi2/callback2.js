// ví dụ callback 2
function fnc1(cb, data) {
    cb(data);
}

let cb = function (data) {
    console.log(`say hello ${data}`);
}

fnc1(cb, 'doracoder');