/**
 * Việc tạo hàm với câu lệnh async function sẽ định nghĩa ra một hàm không đồng bộ (asynchronous function)
 *  - hàm này sẽ trả về một object AsyncFunction 
 * Các hàm không đồng bộ sẽ hoạt động trong một thứ tự tách biệt so với phần còn lại của đoạn code thông qua một event loop, 
 * trả về kết quả là một Promise tiềm ẩn.
 *  Nhưng cú pháp và cấu trúc của đoạn code mà sử dụng các hàm async function trông cứ như những hàm đồng bộ tiêu chuẩn.
 * -----------------------------------------Cách thức hoạt động!---------------------------------------------------------
 * Một hàm async có thể bao gồm một biểu thức await,
 *  biểu thức này sẽ tạm dừng việc thực thi của hàm async để chờ cho Promise's resolution được truyền vào,
 *  sau đó tiếp tục việc thực thi của hàm async and evaluates as the resolved value. 
 * Từ khóa await chỉ có hiệu lực bên trong hàm async.
 * Nếu bạn sử dụng nó bên ngoài phần thân của hàm async, bạn sẽ nhận một SyntaxError. 
 * Trong lúc hàm async tạm dừng, hàm được gọi sẽ tiếp tục chạy. (hàm mà nhận được Promise tiềm ẩn được trả về bởi hàm async).
 */

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 3000);
});

async function execute() {
    console.log('Bat dau');
    const result = await myPromise;
    console.log(result);
    console.log('ket thuc');
}

execute();

// Thực thi promise trong 1 function


// let myPromise = function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Success!');
//         }, 3000);
//     });
// }

// async function execute() {
//     console.log('Bat dau');
//     const result = await myPromise();
//     console.log(result);
//     console.log('ket thuc');
// }

// execute();