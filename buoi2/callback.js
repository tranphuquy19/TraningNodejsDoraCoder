// callback ví dụ cách dùng
function fnc1(cb) {
    cb();
}

let cb = function () {
    console.log('say hello');
}

fnc1(cb);