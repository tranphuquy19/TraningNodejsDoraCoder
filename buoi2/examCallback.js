// ví dụ callback 
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function tinh(a, b, cb) {
    let ketQua = cb(a, b);
    console.log(ketQua);
}

tinh(1, 3, sum);
tinh(1, 3, sub);

