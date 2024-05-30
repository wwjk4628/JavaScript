// 연습문제 1.
// 2단 ~ 9단까지 출력
let star = "*";
let starplus = "";
let i;
let n;
let j;
// for
for (i = 2; i <= 9; i++) {
    console.log(i, "단");
    for (n = 1; n <= 9; n++) {
        console.log(i, "*", n, "=", i * n);
    }
    console.log("\n");
}
// while
i = 2;
n = 1;
while (i < 10) {
    console.log(i, "단");
    while (n < 10) {
        console.log(i, "*", n, "=", i * n);
        n++
    }
    console.log("\n");
    i++
    n = 1;
}
// 연습문제 2.

// *****
// ****
// ***
// **
// *

// for
i = 0;
n = 5;
j = 5;
console.log("for")
for (i = 0; i < j; i++) {
    for (n = j; n > i; n--) {
        starplus += star;
    }
    console.log(starplus);
    starplus = "";
}
i = 0;
n = 5;
j = 5;
// while
console.log("\nwhile");
while (i < j) {
    while (n > i) {
        starplus += star;
        n--
    }
    console.log(starplus);
    starplus = "";
    i++;
    n = j;
}

j = 5;
console.log("\nfor")
for (i = j; i > 0; i--) {
    for (n = j + 1; n > i; n--) {
        starplus += star;
    }
    console.log(starplus);
    starplus = "";
}


// for ... in : 객체의 속성 키를 반복
const obj = {
    name: "홍길동",
    age: 28,
    job: "도적"
}

for (let key in obj) {
    console.log(`${key}`);
}

for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
}

// for ... of : 배열의 순회
const arr = [1, 2, 3, 4, 5];
for (let item of arr) {
    console.log(item);
}