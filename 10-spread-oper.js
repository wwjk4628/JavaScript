console.log("=========== 배열의 전개 연산")
const arr1 = ['홍길동', '장길산'];
const arr2 = ['임꺽정', '전우치'];
const combined = [...arr1, ...arr2];
console.log("ES6 combine:", combined);

console.log("=========== 배열의 전개")

// let [first, second, third = "empty", ...others] = arr2;
// console.log(first, second, third, others);

// [first, second, third = "empty", ...others] = combined;
// console.log(first, second, third, others);

console.log("======== 객체 전개 연산")

let obj1 = { one: 1, two: 2, other: 0 };
let obj2 = { three: 3, four: 4, other: -1 };
let combined2 = {
    ...obj2,
    ...obj1,
}
console.log(combined2);

// delete combined2.other;
// console.log(combined2);

let {one, three, five, ...rest} = combined2
console.log(one, three, five, rest)
let { other, ...others } = combined2;
console.log(other, others);
