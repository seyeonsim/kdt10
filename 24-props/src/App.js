import "./App.css";
import Button from "./Button";
import ClassComponent from "./ClassComponent";
import FuncComponent from "./FuncComponent";
import PropsEx1 from "./PropsEx1";
import PropsEx2 from "./PropsEx2";
import PropsEx3 from "./PropsEx3";

function App() {
  function valid() {
    console.log("콘솔 띄우기 성공!");
  }
  return (
    <div className="App">
      <FuncComponent name="코딩온" />
      <FuncComponent />

      <hr />
      <Button link="http://www.google.com">Google</Button>

      <hr />
      <ClassComponent name="코딩온" />
      <ClassComponent />

      <hr />
      <div className="Food">
        <PropsEx1 food="체리" />
        <PropsEx1 />
      </div>

      <div>
        <PropsEx2
          title="나의 하루는 4시 40분에 시작된다"
          author="김유진"
          price="13,500원"
          type="자기개발서"
        />
      </div>

      <PropsEx3 text="App에서 보낸 text" valid={valid} />
    </div>
  );
}

export default App;
