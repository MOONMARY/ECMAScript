function logicA() {
    console.log("begin logic A");   //로직A를 시작했습니다
    setTimeout(() => {
        console.log("callback A called !");
        console.log("begin logic B");
        setTimeout(() => {
            console.log("callback B called !");
            console.log("begin logic C");
            setTimeout(() => {
                console.log("callback C called !");
            }, 2000);
            console.log("end logic C");
        }, 2000);
        console.log("end logic B");
    }, 2000);   //2초
    console.log("end logic A");
}
// logicA();
//비동기 처리를 수행하되 흐름을 동기방식처럼 처리할 필요가 있다
//-> promise

function logicPromise() {
    console.log("begin logicPromise");

    return new Promise(function(resolve, reject) {
        //resolve -> fullfill 상태로 이전시킬 때 사용하는 콜백
        //reject -> rejected 상태로 이전시킬 때 사용하는 콜백
        console.log("begin logicPromise");
        setTimeout(() => {
            // resolve("RESOLVE");
            // reject("REJECTED");
        }, 3000);
    });
}

function testLogicPromise() {
    console.log("Test Logic Promise");
    logicPromise()
        .then(value => { console.log("PROMISE resolve:",value)})
        .catch(reason => {console.error("PROMISE reject:", reason)});
}
// testLogicPromise();

//좀 더 편하게 비동기 구현을 위해 async/await 키워드 이용
//async 함수는 비동기 처리를 위해 Promise를 반환한다
async function f() {
    console.log("async function");
    return 1;
}

console.log("Before f()");
f().then(console.log);
console.log("End Of Code");



//가상 시나리오
//Promise 이용, 네트워크 통신(Ajax)으로 데이터를 가져온다
function fetchData() {
    //네트워크 통신: 가정
    return new Promise((resolve, reject) => {
        setTimeout(() => {  //콜백zone~
            resolve("서버로부터 가져온 데이터");
    },3000);
});
}
fetchData();
async function processData() {
    console.log("데이터 가져오는 중...");

    //await: Promise가 해결될 때까지 코드를 일시중단
    //Promise가 해결되면 await는 Promise의 결과를 반환
    const data = await fetchData();
    console.log("가져운 데이터:", data);
}
processData();