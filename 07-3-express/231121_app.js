const express = require('express');
const app = express();
const PORT = 8000;

// express에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set('view engine', 'ejs');
// 템플릿 엔진 파일(.ejs)을 저장할 위치
app.set('views', './views');

// static 미들웨어 등록(정적 파일 로드 ex. css, js)
// static 이라는 실제 폴더를 static 이라는 이름으로 접근하겠다
    // ex. app.use('/static', express.static(__dirname + '/new')) 
    // : new 라는 이름을 가진 실제 폴더를 static 이라는 이름으로 접근하겠다
app.use('/static', express.static(__dirname + '/static')) 
// __dirname : 현재 이 js가 포함되어있는 파일 전체 = 07-3-express 폴더
console.log(__dirname);  // 확인해보기

// app.get(경로, 해당 경로로 들어왔을 때 실행할 콜백 함수)
// localhost:8000/ 경로로 접속했을 때
app.get('/', function(req, res) {
    // send(응답 내용)
    // res.send('<h1>Hello Express!</h1>');

    //231121_index라는 파일명을 찾아서 해당 파일을 렌더
    res.render('231121_index', {
        // 231122 수업
        btns: ['사과', '오렌지', '키위'],
        isLogin: true,
        me: {
            name: 'seyeon',
            msg: '반갑습니다~'
        }
    })
})

app.get('/kdt', function(req, res) {
    // send(응답 내용)
    res.send('<h1>Hello Express kdt!</h1>');
})

// 231122 수업
// header - /login, /register 경로 설정
// /login 경로로 접속했을 때
app.get('/login', function(req, res) {
    res.render('231122_login')
})
// /register 경로로 접속했을 때
app.get('/register', function(req, res) {
    res.render('231122_register')
})

// 포트 열기
app.listen(PORT, function() {
    console.log(`server listening on ${PORT}`);
})