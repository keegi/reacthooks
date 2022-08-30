import React from "react";
import "./styles.css";
import UseStateExam from "./exam/UseStateExam";
import UseInputExam from "./exam/UseInputExam";
import UseTabsExam from "./exam/UseTabsExam";
import UseEffectExam from "./exam/UseEffectExam";

function App() {
  return (
    <div className="App">
      <h1>Hello React Hooks!!</h1>
      <UseStateExam />
      <UseInputExam />
      <UseTabsExam />
      <UseEffectExam />
    </div>
  );
}

export default App;
