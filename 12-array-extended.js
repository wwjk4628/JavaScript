//  forEach : 배열 내부 요소들을 하나씩 추출, 콜백함수로 전달

function testForEach() {
    let source = ["Banana", "Orange", "Apple", "Mango"]
    console.log("========= 요소와 함께 인덱스 전달");
    source.forEach((item, index) => {
        console.log(`${index} -> ${item}`);
        // console.log(index, item);
    });

    console.log("==========요소, 인덱스와 함께 배열 자체도 전달")
    source.forEach((item, index, arr) => {
        console.log(`${index} -> ${item}`, arr);
    });

};
// testForEach();

function testEverySome() {
    let data = [
        { name: "홍길동", age: 28 },
        { name: "장길산", age: 35 },
        { name: "전우치", age: 25 },
    ];
    console.log(data);
    // data 내부의 모든 객체의 나이가 25세 초과하는지 검증
    let result = data.every(x => {
        return x.age > 25;
    });
    console.log("하나라도 > 25 = " + result);
    
    result = data.some(x => {
        return x.age > 25;
    });
    console.log("모두 > 25 = " + result);

}
// testEverySome();

function testFilter() {
    let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = source.filter(item => item % 2 == 0);
    console.log(result);
}

// testFilter();

function testMap() {
    let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = source.map(item => item * 2);
    console.log(result);
}

testMap();
