//if ~ else if ~ else
//switch ~ case
//for, while, do while
//C계열 문법과 거의 동일


//연습문제 1-1 (for문 구구단)
//2단 ~ 9단까지 루프 돌며 출력
console.log("=============================");
console.log("============================= for 구구단");
for (let i = 2; i < 4; i++) {
    console.log(i + "단");
    for (let j = 1; j < 4; j++) {
        console.log(i + "*" + j + "=" + i*j);
    }
}

console.log("============================= while 구구단");
//연습문제 1-2 (while문 구구단)
//2단 ~ 9단까지 루프 돌며 출력
let i = 2;      //반복변수 초기화
while (i < 4) {
    let j = 1;
    while (j < 4) {
        console.log(i + "*" + j + "=" + i*j);
        j++;
    }
    i++;
}

console.log("============================= for 별");
//연습문제 2-1 (for문 이용 별그리기)
//줄마다 별5개 ~ 별1개 출력
let star = 5;
for (let j = -4; j < star; j++) {
    console.log("*".repeat(star));
    star--;
}

console.log("============================= while 별");
//연습문제 2-2 (while문 이용 별그리기)
//줄마다 별5개 ~ 별1개 출력
let row = 5;    //반복변수 초기화
while(row > 0) {
    //별의 변수 초기화
    let stars = "";
    let col = 1;
    while (col <= row) {
        stars += "*";
        col++;
    }
    console.log(stars);
    row--;
}

//TODO: for ... in
//객체의 속성 ket를 반복하는 루프

//TODO: for ... of
//컬렌션 객체(배열)의 요소 순환