import "./App.css";

function App() {
  // const name = "gildong";
  const styles = {
    backgroundColor: "yellow",
    color: "red",
    fontSize: "40px",
  };
  // 이렇게 주석 동일하게 적용

  const name = "하이";
  const animal = "강아지";

  const a = 7;
  const b = 4;

  const title = "Hello World";

  return (
    <div className="App">
      {/* JSX 문법 */}
      {/* 1. 하나로 감싸인 요소 */}
      {/* 2. javascript 표현식 사용
        - {}로 감싸면 js 표현식 사용 가능
        - {}에서 삼항 연산자 사용 가능(if문은 사용 불가) */}
      <div>{name} 안녕하세요!</div>
      <div>{name === "gildong" ? "gildong 입니다" : "잘못 아셨네요"}</div>
      {/* 3. style 속성(inline)
        - 리액트에서 돔 요소에 스타일 적용시 문자열 X -> 객체 사용
        - 스타일 속성 이름 중에서 하이픈(-) 포함시 camelCase 사용 */}
      <div
        style={{ backgroundColor: "blue", color: "white", fontSize: "48px" }}
      >
        스타일 적용!
      </div>
      <div style={styles}>스타일 적용2</div>

      {/* 4. className 사용
        - class 속성이 아닌 className 속성 사용 */}
      {/* 5. 종료 태그가 없는 태그의 사용
        - 기존에 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing
          - <input> -> <input></input> or <input />
          - <br> -> <br><br/> or <br /> */}
      {/* 6. 주석
        - // : jsx 외부 주석 (return 밖)
        - js 내부 주석 {**} */}

      {/* jsx 실습 1 */}
      <h2>
        제 반려 동물의 이름은 {name}입니다. {name}는 {animal}입니다.
      </h2>

      {/* jsx 실습 2 */}
      {3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}
      <br />

      {/* jsx 실습 3 */}
      {a > b && "a가 b보다 큽니다"}
      <br />
      <br />

      {/* jsx 실습 4 */}
      <div className="title">{title}</div>
      <div>
        아이디 :<input type="text" name="" id="" />
      </div>
      <div>
        비밀번호 :<input type="text" name="" id="" />
      </div>
    </div>
  );
}

export default App;
