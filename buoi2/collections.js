// ví dụ .reduce, .filter, .map

let arr = [1, 2, 3, 4];

//map -> forEach

// arr.forEach((element, index) => {
//     console.log({ element, index });
// });

let arrKetQua = arr.map((e, i)=>{
    return {
        nhan10: e * 10,
        nhan20: e *20
    }
});
//  console.log(arrKetQua)

//filter

let arr2 = arr.filter(value => {
    return true;
})

// console.log(arr2);

//reduce
let initValue = -5;
let arr22 = [
    {
        age: 1
    },
    {
        age: 2
    },
    {
        age: 3
    },
]
let sum = arr22.reduce((total, hienTai) => {
    return total + hienTai.age;
}, initValue);
console.log(sum);

