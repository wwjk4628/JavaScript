// 한 줄 주석
/*
    여러 줄 주석
    : 주석의 사용 방법은 C와 동일
*/

// console 객체 : 출력 장치에 로그 레벨별로 로그 출력하는 객체
// FATAL - ERROR - WARN -NORMAL LOG,INFO, DEBUG

console.info("정보 메시지");
console.debug("디버그 메시지 출력");
console.log("일반 메시지");

console.warn("경고 메시지")
console.error("에러메시지")
console.log("String", 2024, true);

//  ES
//  객체 : 여러 개의 데이터(속성) + 데이터를 다룰 수 있는 기능(메서드)
//          .으로 내부 속성과 메서드에 접근할 수 있다.
console.log("==============");
//  var:    ES6이전 -> 변수의 범위 등 일관성이 없음
var testVar = "Var";
let testLet = "Let";
const testConst = "Const";
console.log(testVar, testLet, testConst);
testVar = "Change";
testLet = "Change";
// testConst = "Change";
// const는 불변 데이터 -> 선언과 동시에 데이터 할당해야함
console.log(testVar, testLet, testConst);

//  ES는 Dynamic Type Language
//      -> 데이터가 할당될 떄 타입이 결정
//      -> 타입과 무관하게 어떤 객체든 할당됨

//  특정 연산 작업 수행 이전에 데이터 탕비을 체크 해야할 필요 있을 수 있다.
let v = "this is String";
console.log(v);
console.log(typeof(v));
v = 2024
console.log(typeof(v));
v = 10 > 8;
console.log(typeof(v));
v = Math.PI;
console.log(typeof(v));

