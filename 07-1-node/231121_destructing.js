// 구조 분해 할당 : 구조를 분해해서 변수에 할당

// 1. 객체를 구조 분해
const cookie = {
    choco: '초코맛',
    vanilla: '바닐라맛',
    mint: '민트맛'
}

console.log(cookie.choco);

// 구조분해하기
const { mint, choco, vanilla } = cookie;

console.log(choco);
console.log(vanilla);
console.log(mint);


// 2. 배열을 구조분해
const arr = ['first', 'second'];
const [one, two] = arr;  // key값이 따로 없기 때문에 index값으로 접근
//const [one, two] = ['first', 'second'] 와 같은 의미

console.log(one, two);
// const one = arr[0];
// const two = arr[1];

