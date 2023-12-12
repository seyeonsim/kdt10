// math 모듈을 불러와서 사용
const add = require('./231121_math.js');
// console.log(add(5, 7));


// export - import 사용해보기
import {add} from "./231121_math.js"
console.log(add(5,6));