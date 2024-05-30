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

// 데이터처리 파이프라인
// map -> filter -> sort -> reduce

function testFilter() {
    let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = source.filter(item => item % 2 == 0);
    console.log(result);
};

// testFilter();

function testMap() {
    let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = source.map(item => item * 2 - 1);
    console.log(result);
};

// testMap();



// reduce
function reduceBasic() {
    console.log("========== reduce 기본")
    var arr = [12, 4, 19, 33, 86];
    var sum = arr.reduce((acc, value, idx, arr) => {
        console.log(`누산 값은 ${acc}`);
        console.log(`${arr}의 ${idx}번째 요소는 ${value}`);
        return acc + value;
    }, 0);
    console.log(sum);
};
// reduceBasic();


//  reduce를 map처럼
function reduceMap() {
    console.log("============== reduce으로 map")
    var arr = [12, 4, 19, 33, 86];
    var multiply = arr.reduce((acc, value) => {
        console.log(acc);
        acc.push(value * 2);
        return acc;
    }, []);
    console.log(multiply);
};
// reduceMap();

function reduceFilter() {
    console.log("============== reduce으로 짝수 filter")
    var arr = [12, 4, 19, 33, 86];
    var multiply = arr.reduce((acc, value) => {
        if (value % 2 == 0) {
            acc.push(value);
        };
        return acc;
    }, []);
    console.log(multiply);
};
// reduceFilter();

const data = [
    { name: '철수', kor: 85, eng: 92, math: 88},
    { name: '영희', kor: 70, eng: 74, math: 95},
    { name: '지후', kor: 91, eng: 89, math: 85},
    { name: '지수', kor: 65, eng: 70, math: 72},
    { name: '윤정', kor: 80, eng: 90, math: 91}
];

function testDataPipeline() {
    console.log("===== map, filter, sort, reduce 테스트");
    console.log("원본데이터:", data);

    //  map 함수 이용 -> total 파생변수 생성
    const studentsWithTotal = data.map(student => ({
        ...student, 
        total: student.kor + student.eng + student.math 
    }));
    console.log("map:", studentsWithTotal);

    //  filter 함수 이용 -> total >= 240 만 추출
    const filteredStudents = studentsWithTotal.filter(student => student.total >= 240);
    console.log("총점240이상:", filteredStudents);

    //  sort 함수 이용 -> 총점 기준으로 정렬
    // const sortedStudents = filteredStudents.sort((a, b) => a.total - b.total);  //  ASC
    const sortedStudents = filteredStudents.sort((a, b) => b.total - a.total);  //  DESC
    console.log("total순 정렬:", sortedStudents);

    //  reduce 함수 이용 -> 학생들의 총점 평균
    const totalSum = sortedStudents.reduce((acc, student) => acc + student.total, 0);
    console.log("총점240이상 학생들의 총점:", totalSum);
    const avgTotalScore = totalSum / sortedStudents.length;

    console.log("데이터 파이프라인 구축:",
        data.map(student => ({
            ...student, 
            total: student.kor + student.eng + student.math 
        }))
        .filter(student => student.total >= 240)
        .sort((a, b) => b.total - a.total)
        .reduce((acc, student) => acc + student.total, 0) / 3);
}
testDataPipeline();

