import "./App.css";
import UseMemoEx from "./UseMemoEx";
import UseCallbackEx from "./UseCallbackEx";
import UseCallbackEx2 from "./UseCallbackEx2";

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={3} />
    </div>
  );
}

export default App;
