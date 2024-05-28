// timer 관련 함수
// 특정 시간이 흐른 후에 특정 기능 수행
// setTimeout(() => { }, milliseconds);

function timerTest() {
    console.log("3초후 인사합니다.")
    setTimeout(() => {
        console.log("안녕하세요");
    }, 3000);
}
// timerTest();

// 특정 시간간격마다 특정 함수 실행
// setInterval(() => {}, 실행간격)
function intervalTest() {
    console.log("시작")
    let count = 10;
    let timer = setInterval(() => {
        console.log(count--);
        if (count < 0) {
            console.log("타이머를종료합니다."); clearInterval(timer);
        }
    }, 1000);
}
intervalTest();