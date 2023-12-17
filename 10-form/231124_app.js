const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

// 미들웨어 등록

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({extended: true})); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

app.get('/', (req, res) => {
    // views 폴더 내부에 231124_index라는 ejs 파일을 보여줌
    res.render('231124_index');
})

// GET '/login' 요청이 들어오면 임의의 메시지 전송
// get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/login', (req, res) => {
    console.log(req.query); //{ id: 'apple', pw: '1234' }
    // res.send('get 요청 성공!');

    res.render('231124_result', {title : 'Get 요청', userInfo: req.query})
})

// POST '/login' 요청이 들어오면 임의의 메시지 전송
// post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장
app.post('/login', (req, res) => {
    console.log(req.body); //{ id: 'banana', pw: '1234' }
    // res.send('post 요청 성공!');

    res.render('231124_result', {title : 'Post 요청', userInfo: req.body});
})

app.post('/js-form-check', (req, res) => {
    console.log(req.body);
    res.send('js validation 성공!');
})

// ---- 실습
// 실습 get으로 정보 받기
app.get('/practice1', (req, res) => {
    res.render('231124_practice1')
})

app.get('/result1', (req, res) => {
    console.log('prac1 >', req.query);
    res.render('231124_practice1Result', req.query);

})

// 실습 post로 정보 받기
app.get('/practice2', (req, res) => {
    res.render('231124_practice2')
})

app.post('/result2', (req, res) => {
    console.log('prac2 >',req.body);
    res.render('231124_practice2Result', req.body);
})

app.listen(PORT, function() {
    console.log(`${PORT} is opening!`);
})
