//  배열의 생성 : 방법 1, new 키워드
const v1 = new Array(10);   //  10개짜리 배열
const v2 = new Array();     //  빈 배열
const v3 = new Array(2024, "String", true); //  초기값이 있을 때, 어떤 객체들(함수도) 다 들어간다

console.log(v1, v1.length, typeof v1);
console.log(v2, v2.length, typeof v2);
console.log(v3, v3.length, typeof v3);

//  배열의 생성 : 방법 2, 리터럴로 생성 -> 추천
const v4 = [];  //  = new Array();
const v5 = ["red", "green", "blue", "yellow"];  //  = new Array("red", "green", "blue", "yellow")

console.log(v4, v4.length);
console.log(v5, v5.length);

//  ES 특성상 변수가 참조하는 객체의 type 체크가 필요
console.log(typeof v5);

//  주로 Array 판별 함수를 이용, 배열 여부를 판단
console.log("is v5 Array?", Array.isArray(v5));   //  

//  ES의 경우 객체 속성도 배열(맵)처럼 사용할 수 있음
const person = {
    name: "홍길동",
    age: 28
};

console.log(person.name, person.age);
console.log(person['name'], person['age']); //  객체의 속성을 배열처럼

//  ES 배열은 인덱스 범위를 엄격하게 체크하지 않음
//  인덱스 범위를 벗어난 접근도 허용함

const v6 = [];
console.log(v6, v6.length);
v6[10] = 2024;

console.log(v6, v6.length);

console.log("========== 주요 메서드");
//  합치기 : concat
const veges = ["무", "배추", "쪽파"];
console.log(veges, veges.length);
const sources = ["소금", "고춧가루", "새우젓"];
console.log(sources, sources.length);

const ingr = veges.concat(sources);
console.log(ingr, ingr.length);

//  join : 배열 내부의 요소(아이템)를 한 문장으로 합침
console.log(ingr, "-> 김장재료:", ingr.join(", "));
console.log(ingr);

// push, pop
console.log("========== push,pop")
let fruits = [ "Banana", "Orange", "Apple"];
fruits.push("Kiwi");
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

// shift
console.log("========== shift")
fruits = [ "Banana", "Orange", "Apple"];
fruits.push("Kiwi");
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);

// splice
console.log("========== splice")
fruits = [ "Banana", "Orange", "Apple"];
fruits.push("Mango");
console.log(fruits);
console.log(fruits.splice(2));
console.log(fruits);

fruits = [ "Banana", "Orange", "Apple"];
fruits.push("Mango");
console.log(fruits);
console.log(fruits.splice(2,1));
console.log(fruits);

// reverse, slice, sort
console.log("========== reverse, slice, sort")
fruits = [ "Banana", "Orange", "Apple"];
fruits.push("Mango");
fruits.reverse();
console.log(fruits);

let slices =fruits.slice(1,3);
console.log(slices);

fruits.sort();
console.log(fruits);
fruits.sort((v1, v2) => {
    // 키 함수: 두개 요소의 선후 관계 결정해 줌
    // 리턴값
    //      음수 : -> v1이 앞에 온다.
    //      양수 : -> v1이 뒤에 온다(v2가 앞에 온다.)
    //      0   :  -> 순서 안 바꿈(순위가 같다.)
    if (v1 < v2) return 1;
    if (v1 > v2) return -1;
    if (v1 == v2) return 0;
});
console.log(fruits);
fruits.sort((v1, v2) => {
    // if (v1.length < v2.length) return 1;
    // if (v1.length > v2.length) return -1;
    // if (v1.length == v2.length) return 0;
    return v1.length - v2.length;
});
console.log(fruits);

const str = "JavaScript is something strange than other languages";
let chunks = str.split(" ");

console.log(chunks);

for (let i = 0; i < chunks.length; i++){
console.log("Chunk", i, ":" , chunks[i]);
}