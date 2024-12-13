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
            resolve("RESOLVE");
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
testLogicPromise();