let gioiTinh = 'gay';
let tamTrangCoAy = 'vui';

/**
 * Tình huống: Tỏ tình 1 cô gái, nếu tâm trạng vui & giới tính nữ -> kết quả Em đồng ý
 * ngược lại tâm trạng ko vui -> Cút ngay cho đẹp trời và giới tính khác với nữ là Toang thật rồi
 */
let diToTinh = new Promise((resolve, reject) => {
    // console.log('---bat dau cau chuyen---');

    if (gioiTinh === 'gai') {
        if (tamTrangCoAy === 'vui') {
            let traLoi = { message: 'Em dong y' };
            resolve(traLoi);
        } else {
            let traLoi = { message: 'Cut ngay cho dep troi' };
            resolve(traLoi);
        }
    } else {
        let ketQua = { message: 'Toang that roi' };
        reject(ketQua);
    }

    // console.log('---ket thuc cau chuyen---');
});

function toTinh() {
    diToTinh.then((ketQua) => {
        console.log(ketQua);
    }).catch((error) => {
        console.log(error);
    });
}

toTinh();

// xu lí bdb -> callback, promise, async/await

let myPromise = new Promise(function (resolve, reject) { // khai bao promise

});

myPromise.then(function (ketQua) { // su dung promise
    console.log(ketQua);
}).catch(function (error) {
    console.log(error);
})

// trạng thái Promise
/**
 * 1. Pending -> trạng thái đầu tiên khi new Promise, -> đang xử lí
 * 2. Fulfilled (thỏa mãn) -> xử lí xong
 * 3. Rejected (lỗi, thoát) -> xử lí có lỗi trong quá trình chạy
 */
// thenable chain(chuỗi)