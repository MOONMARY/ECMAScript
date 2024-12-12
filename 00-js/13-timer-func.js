//기본적인 프로그램의 흐름
// console.log("command1");
// console.log("command2");
// console.log("command3");

//timer 함수
//타이머 생성: setTimeout(callback, delay)
//-> 비동기 방식
//타이머 해제: clearTimeout(timerId)

function timerTest() {
    console.log("2초 후 인사합니다.");  //1번째로 실행
    setTimeout(() => {
        console.log("안녕하세요!");     //3번째로 실행
    }, 2000);   //2000mc-2초임
    console.log("End of function");    //2번째로 실행
}
// timerTest();


function intervalTest() {
    //interval: 특정 시간간격으로 호출되는 함수
    //10부터 1초씩
    let count = 10;
    console.log("10초 후에 타이머가 종료됩니다.");
    console.log(count);
    let intervalId = setInterval(() => {
        console.log(--count);
        if (count <= 0) {
            console.log("타이머를 종료합니다.");
            clearInterval(intervalId);
        }
    },1000);
    console.log("End of Function");
}
intervalTest();