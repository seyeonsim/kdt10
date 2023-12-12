// math module
// add 더하기 함수를 정의한 파일

// const add = (a,b) => a+b ; 아래랑 동일한 의미 한 줄이라서 return 안 썼음

const add = (a, b) => {
    return a + b;
}

// module.exports = add;
export {add};  // module.exports = add; 와 동일
// package.json 에 “type”: “module” 을 추가해 사용