//forEach: 배열 내부 요소들을 하나씩 추출, 콜백 함수로 전달

function testForEach() {
    console.log("=".repeat(55),"testForEach");
    const exo = ["suho", "do", "chen", "kai"];

    console.log("-----요소들만 전달");
    exo.forEach(item => {
        console.log(item);
    })

    console.log("-----요소와 함꼐 인덱스 전달");
    exo.forEach((item, index) => {
        console.log(`${index}번째 요소 -> ${item}`);
    })

    console.log("-------");
    exo.forEach((item,index,arr) => {
        console.log(`${index} -> ${item}`, arr);
    })
}
// testForEach();

function testEverySome() {
    const data = [
        {name: "김준면", age: 33},
        {name: "변백현", age: 32},
        {name: "오세훈", age: 30}
    ];      //객체의 배열
    console.log("원본 데이터: ", data);

    //모든 객체의 age가 25세 초과하는지 검증
    let result = data.every(obj => obj.age > 25);

    console.log("모든 인물의 나이가 25세 초과?", result);

    //일부 객체의 age가 25세를 초과하는지 검증
    result = data.some(obj => {
        return obj.age > 25;
    });
    console.log("일부 인물의 나이가 25초과?", result);
}
// testEverySome();

//데이터 처리 파이프라인
const numbers = [1,2,3,4,5,6,7,8,9,10];
const source = [12,4,19,33,86];

//map -> filter -> sort(정렬) -> reduce(집계)

//map: 데이터 변형
function testMap() {
    //map: 배열 형태는 그대로, 배열 요소를 변형
    console.log("========== map");
    console.log("원본배열: ", numbers);

    //numbers 배열의 모든 요소를 2배
    //기존 방식의 구현
    let multiply = [];  //결과가 될 빈배열
    for (let i = 0; i < numbers.length; i++) {
        multiply.push(numbers[i]*2);    //numbers에서 i꺼내서 곱하기2 하고 push
    }
    console.log("기존방식: *2: ", multiply);

    //Map 구현
    multiply = numbers.map(item => item*2);
    console.log("Map: *2: ", multiply);
}
// testMap();

//filter
function testFilter() {
    console.log("========== filter");
    //filter: 내부 요소는 그대로, 조건만족하는 요소만 뽑아서 새 배열 생성
    
    //numbers배열에서 짝수만 필터링
    let result = numbers.filter(item => item%2 == 0)
    console.log("원본 데이터: ", numbers);
    console.log("짝수 데이터: ", result);
    console.log("3의 배수: ", 
        numbers.filter(item => item%3 == 0)
    );
}
testFilter();

function testReduce() {
    console.log("============ reduce");
    //가장 일반적인 Reduce -> 집계
    console.log("원본배열: ", source);
    //source배열의 모든 요소를 합산
    let sum = source.reduce((acc, value, index, arr) => {
        console.log(
            `콜백 파라미터 (acc: ${acc}, value: ${value}, index: ${index}, arr: ${arr})`, acc + value
        );
        //acc: 현재까지의 집계값
        //value: 현재값
        //acc에다 value를 더해줘야 집계가 된다
        return acc + value;     //다음번 콜백의 acc로 전달
    }, 0);

    console.log("합산결과: ", sum);
}
// testReduce();

function testReduce2() {
    console.log("------------------ Reduce 2")
    //반복되는 모든것에는 reduce 함수를 적용할 수 있음
    //map함수를 reduce함수로 구현
    //모든 요소를 *2해서 새 배열 생성
    console.log("원본배열: ", numbers);
    let result = numbers.reduce((acc, value) => {
        console.log(`콜백 파라미터: (acc: ${acc}, value: ${value})`);
        acc.push(value * 2);
        console.log(`-> ${acc}`);

        return acc;
    }, []);
    console.log("요소 두배: ", result);
}
// testReduce2();


function testReduce3() {
    console.log("-------------------- testReduce3")
    //reduce를 이용, filter 함수 구현
    //numbers 배열의 요소 중 짝수만 필터링
    console.log("원본배열: ", numbers);
    let result = numbers.reduce((acc, value) => {
        if (value % 2 == 0) {
            //짝수
            acc.push(value);
        }
        return acc;
    }, []);
    console.log("짝수배열: ", result);
}
// testReduce3();

const data = [
    {name: "준면", kor: 85, eng: 92, math: 88},
    {name: "세훈", kor: 70, eng: 74, math: 95},
    {name: "민석", kor: 91, eng: 89, math: 85},
    {name: "백현", kor: 65, eng: 70, math: 72},
    {name: "경수", kor: 80, eng: 90, math: 91}
];
//데이터 파이프라인 구축 예제
function testDataPipeline() {
    console.log("===================== 파이프라인");
    console.log("원본 데이터: ", data);
    //1단계: 데이터배열로부터 국,영,수 점수 합산해서 total변수 만들기
    //map 함수 이용-> total 파생 변수
    const studentsWithTotal = data.map(s => ({...s, //객체 필드 만들기. {}는 object입니다!라고 명시한거임
        total: s.kor + s.eng + s.math
    }));
    console.log("map: ", studentsWithTotal);

    //filter함수 이용-> total >= 240만 출력
    const filteredStudents = studentsWithTotal.filter(s => s.total >= 240);
    console.log("총점 240 이상: ", filteredStudents);

    //sort함수 이용 정렬 -> 총점 기준으로
    const sortedStudents = filteredStudents.sort(
        // (a,b) => a.total - b.total
        (a,b) => b.total - a.total
    );
    console.log("total순 정렬: ", sortedStudents);

    //reduce함수 이용 -> 240점 이상 학생들의 총점 평균
    const totalSum = sortedStudents.reduce(
        (acc, student) => acc + student.total,
        0
    );
    console.log("총점 240이상 학생들의 총점: ", totalSum);
    //평균
    const avgTotalSum = totalSum / sortedStudents.length;
    console.log("총점 240이상 학생들의 평균: ", avgTotalSum);
}

// testDataPipeline();


console.log(
    "데이터 파이프라인 구축:",
    data
    .map(student => ({
        ...student, total: student.kor + student.eng + student.math
    }))
    .filter(student => student.total >= 240)
    .sort((a,b) => b.total -a.total)
    .reduce((acc, student) => acc + student.total, 0) / 3
    );