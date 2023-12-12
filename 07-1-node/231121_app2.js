// math2 모듈 불러와서 사용

const math2 = require('./231121_math2');
console.log(math2.add(3,4));
console.log(math2.E);


// 구조 분해 할당은 내보낸 값과 동일한 이름으로
const { add, PI, E } = require('./231121_math2')
console.log(PI);