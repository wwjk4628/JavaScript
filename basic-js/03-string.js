const s1 = "Modern JavaScript and Java"
const s2 = String("Modern JavaScript and Java");

console.log(typeof s1, typeof s2);

console.log(s1.length, s2.length);

console.log(s1.charAt(7));

console.log(s1[7]);
console.log(s1.substr(7, 10));  //  -> deprecated
console.log(s1.substring(7, 17));
console.log(s1.substring(7));

console.log(s1.indexOf("Java"));
console.log(s1.indexOf("java"));
console.log(s1.lastIndexOf("Script"));

console.log(s1.replace("JavaScript", "JS"));
const s = "        Need to be trimmed      ";
console.log(s.trim());

// ES string 보충 
// 이스케이프 -> 키보드로 입력 불가하거나 특수한 의미를 가진 문자(\)
// \n : 개행
// \t : 탭
// \' : '
// \" : "
// \` : `
// \$ : 템플릿 문자

let message = 'He said, "Hello"';
console.log(message);
message = "He said, \"Hello\"";
console.log(message);
message = "I'm going";
console.log(message);
message = 'I\'m going';
console.log(message);


// 여러 줄 문자열
message = "예전에는 \n" +
    "여러줄 문자열을 만드는 것이 \n" +
    "쉽지 않았습니다.";
message = "예전에는 \n여러줄 문자열을 만드는 것이 \n쉽지 않았습니다.";
console.log(message);

message = `하지만 ES6이상에서는
아주 손쉽게
여러줄 문자열을 만들 수 있습니다.`;
console.log(message);

console.log("/n=============== Template 문자열");
let temp = 24;
message = "현재 실내 온도는 " + temp + "도 입니다.";
console.log(message);

message = `현재 실내 온도는 ${temp}도 입니다.`;
console.log(message);


console.log("===================");


