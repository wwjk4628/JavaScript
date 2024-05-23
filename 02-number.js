// Number
let n1 = 2024;  //  Literal (소스에 직접 입력)
let n2 = Number(2024);  // Number객체 생성
console.log(n1, n2);
console.log(typeof n1, typeof n2);

// 수치데이터 입력 방법
const hex = 0xFF0000;  //   16진수 -> 0x
const oct = 0o10;      //   8진수  -> 0o
const bin = 0b1101;    //   2진수  -> 0o

console.log(hex, oct, bin);

// Math 객체
console.log(Math.round(Math.PI));
console.log(Math.min(1, 2, 3, 4, 5), Math.max(1, 2, 3, 4, 5));
console.log(Math.round(3.567), Math.trunc(3.567), Math.floor(3.567));

console.log("============== Casting");
// Es 주로 문자열로 전달되는 파라미터를 숫자 형태로 변환해야 하는 경우가 많음 데이터 형 변환이 많은 필요 -> parser 게열 함수
console.log(parseInt("011"), typeof parseInt("011"));
console.log(parseInt("011", 2));
console.log(parseInt("FF0000", 16));
console.log(parseInt("1101", 8));

console.log(parseInt("123.456"), parseInt(123.456));
console.log(parseFloat("123.456"));

let v = parseInt("abcde");
console.log(v);
console.log(typeof v, isNaN(v));


