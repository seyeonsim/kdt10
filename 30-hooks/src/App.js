import "./App.css";
import UseMemoEx from "./UseMemoEx";
import UseCallbackEx from "./UseCallbackEx";
import UseCallbackEx2 from "./UseCallbackEx2";
import UseReducerEx from "./UseReducerEx";
import Faq from "./Faq";
import Form from "./Form";
import FormEx from "./FormEx";

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={3} />
      <hr />

      <UseReducerEx />
      <hr />

      <Faq />
      <hr />

      <Form />
      <hr />

      <FormEx />
    </div>
  );
}

export default App;
