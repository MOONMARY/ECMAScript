//배열
//생성 1. Array 객체 이용
const v1 = new Array(10);   //10개짜리 빈 배열
const v2 = new Array();     //빈 배열
const v3 = new Array(1, "ABC", true);   //초기화 배열
console.log(v1, v1.length);
console.log(v2, v2.length);
console.log(v3, v3.length);

//생성 2. 리터럴로 생성(추천!)
const v4 = [];      //빈 배열
const colors = ["red", "green", "blue", "yeollow"];

//타입 체크
console.log(typeof v4, typeof colors);
//특정 객체가 Array인지 확인
console.log(Array.isArray(v4), Array.isArray(colors));

//기본값으로 채우기
const v5 = new Array(10).fill(1);
console.log(v5);
v5.fill("a");
console.log(v5);

//객체도 배열처럼 접근
const person = {
    name: "주지훈",
    age: 28
};
console.log(person['name'], person['age']);

//자바스크립트 배열은 인덱스 범위를 엄격히 체크하지 않음
const arr = [];
console.log(arr, arr.length);
//인덱스 범위를 벗어난 배열의 접근
arr[10] = 2024;
console.log(arr, arr.length);

console.log("=============================== Method");
//배열 합치기: concat
const veges = ["배추", "무", "쪽파"];
const sources = ["소금", "고추가루", "새우젓"];

const ingr = veges.concat(sources);
console.log(ingr);

//join: 특정 문자열 기준으로 합치기
console.log("김장 재료: ", ingr.join(","));

//push, pop  -> stack 자료형처럼 사용가능
let fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits);
fruits.push("Kiwi");
console.log(fruits);
console.log("============= pop");
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits);        //[ 'apple', 'banana' ]
console.log("============= push");
fruits.push("orange", "grape", "Kiwi");
console.log(fruits);
console.log("============= shift");
console.log(fruits.shift());    //apple
console.log(fruits.shift());    //banana
console.log(fruits.shift());    //orange
console.log(fruits);            //grape, kiwi

//splice
console.log("============= splice");
fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log(fruits);
//매개변수 1개: 해당 인덱스부터 끝까지 추출 후 제거
console.log("============= 매개변수 1개");
// console.log("2번 인덱스부터 끝까지 추출 후 제거: " + fruits.splice(2));
// console.log(fruits);

//매개변수 2개: 첫번째 매개변수 인덱스 ~ 두번째 매개변수 개수만큼 추출 후 삭제
console.log("============= 매개변수 2개");
console.log("2번 인덱스부터 1개: " + fruits.splice(2,1));    //2번 인덱스부터 1개
console.log(fruits);

//매개변수 3개 이상
//첫번째 매개변수 인덱스 ~ 두번째 매개변수 개수만큼 추출 후 삭제,
//세번째 이후 매개변수를 요소로 추가
console.log("============= 매개변수 3개 이상");
console.log(fruits.splice(2,1, "mango", "strawberry"));
console.log(fruits);

console.log("----------------- reverse");   //순서 반전
console.log("원본: ", fruits);
fruits.reverse();
console.log("REVERSE: ", fruits);

console.log("----------------- slice");
console.log("원본: ", fruits);
let slice = fruits.slice(2,5);   //2번 인덱스부터 5번인덱스까지
console.log("SLICE: ", slice);

console.log("----------------- sort");  //정렬
console.log(fruits);
// fruits.sort();      //기본은 오름차순
// console.log("sort: ", fruits);
/*
fruits.sort((v1, v2) => {
    //역순 정렬
    //0이면 순서가 같다 (변경 없음)
    //0보다 작으면 = v1이 앞으로
    //0보다 크면 = v2가 앞으로
    if (v1 < v2) return 1;
    if (v1 > v2) return -1;
    if (v1 == v2) return 0;
});
console.log("Sort: ", fruits);
*/

//문자열 길이 순으로 정렬
fruits.sort((v1, v2) => {
    return v1.length - v2.length;
});
console.log("Sort: ", fruits);


//split
console.log("====================================== String::split");
//구분자를 기준으로 문자열 분할 -> 배열로 반환
const str = "JavaScript is something strange than other languages";
console.log(str);
let chunks = str.split('');     //공백문자를 기준으로 분리
console.log(chunks);

for (let i = 0; i < chunks.length; i++) {
    console.log(chunks[i]);
}