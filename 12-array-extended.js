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
testEverySome();