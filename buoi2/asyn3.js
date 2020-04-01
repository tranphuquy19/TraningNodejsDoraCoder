// xử lí bất động bộ
console.log('first');

function sayThird(cb) {
    console.log('third');
}

function end() {
    console.log('end');
}

function saySecond(cb, cb2) { // -> parameters
    setTimeout(function () { //delay 2000ms = 2s
        console.log('second');
        cb();
        cb2();
    }, 2000);
}

saySecond(sayThird, end);
