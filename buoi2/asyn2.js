// code bất đồng bộ (lỗi)
console.log('first');

setTimeout(function () { //delay 2000ms = 2s
    console.log('second');
}, 2000);

console.log('third');

//tác vụ io -> input output ~50ms. Cty java, C#, php, ruby -> nodejs
// nodejs -> trong tác vụ io (request database, xử lí http request từ client, đọc file từ đĩa....)
// code logic (code xử lí giao dịch, ) -> java, C# -> nhanh hơn nodejs (biên dịch) | php, ruby -> chậm nodejs (thông dịch) -> engine v8 (google c++)

// xử lí bất đồng bộ async (asynchronous)
// callback, promise, async/await