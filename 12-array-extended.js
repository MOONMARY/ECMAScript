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