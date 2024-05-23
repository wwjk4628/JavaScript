console.log(123 == "123");
console.log(123 === "123");

let v1, v2;
console.log(v1 == v2);
console.log(v1 === v2);
console.log(typeof v1, typeof v2);
v1, v2 = null;
console.log(v1 == v2);
console.log(v1 === v2);
console.log(typeof v1, typeof v2);


let num = 3;
if (num > 0) {
console.log("양수입니다.");
} else if (num < 0) {
console.log("음수입니다.");
} else {
console.log("0입니다.");
};

let grade = "C";
switch (grade) {
case "A":
case "B":
case "C":
case "D":
console.log("Pass");
break;
case "F":
console.log("Fail");
break
default:
console.log("?");
};

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) console.log(i);
    };