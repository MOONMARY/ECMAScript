let arr1 = ['김준면', '오세훈'];
let arr2 = ['변백현', '도경수'];

let combined = [];
//방법1
combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
console.log("combined 1: ", combined);
//방법2
combined = arr1.concat(arr2);
console.log("combined 2: ", combined);
//방법3
combined = [].concat(arr1, arr2);
console.log("combined 3: ", combined);

//ES6 방식
combined = [...arr1, ...arr2];
console.log("ES6 combined: ", combined);

//배열의 전개
console.log("=".repeat(60)+" 배열의 전개");
console.log("arr1:", arr1);

// let first = arr1[0];
// let second = arr1[1];
let [first, second, third, ...others] = arr1;   //arr1요소들을 []안에 할당하겠따
console.log(first, second, third, others);      //할당값이 없어서 undefinded나옴
console.log(first, second, third = "empty", others);

console.log("combined: ", combined);
[first, second, third = "empty", ...others] = combined;
console.log(first, second, third, others);
//-> 3번째값이 변백현 있으니까 empty대신 변백현이 나옴
//배열의 나머지 others(도경수)부분은 []안에 들어감


console.log("=".repeat(60)+" 객체 전개 연산");
let obj1 = {one: 1, two: 2, other: 0};
let obj2 = {three: 3, four: 4, other: -1};

combined = {
    one: obj1.one,
    two: obj1.two,
    three: obj2.three,
    four: obj2.four,
    other: obj2.other   //중복 속성
}
console.log("combined 1: ", combined);

//방법 2
//{}객체에 obj1객체와 obj2객체를 combine 시킨다
combined = Object.assign({}, obj1, obj2);
console.log("combined 2: ", combined);  //obj2가 obj1을 덮어쓰기 함

console.log("--------------------------- ES6 방식");
combined = {
    ...obj1,    //obj1의 모든 속성을 전개
    ...obj2    //obj2의 모든 속성을 전개
}
console.log("ES6 combined(obj2):", combined);
//obj2를 나중에 썼으니까 obj2의 others값이 들어감

//연결 순서 변경
combined = {
    ...obj2,
    ...obj1
}
console.log("ES6 combined(obj1): ", combined);
//obj1을 나중에 썼으니까 obj1의 others값이 들어감


console.log("=".repeat(60)+" 객체 전개 할당");
console.log("object: ", combined);

let {other, ...remains} = combined; //others대신 remains. 걍 변수 이름임
console.log(other, remains);