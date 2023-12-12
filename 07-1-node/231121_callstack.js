/*
function first() {
    second();
    console.log(1);
}

function second() {
    console.log(2);
}

// LIFO 방식 : Last In First Out
first();
*/

function run() {
    console.log('3초 뒤 실행');
}

console.log('시작');
setTimeout(run, 3000);   // ms 단위라서 3000 = 3초
console.log('끝');