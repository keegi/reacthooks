import React from "react";
import "./styles.css";
import UseStateExam from "./exam/UseStateExam";
import UseInputExam from "./exam/UseInputExam";
import UseTabsExam from "./exam/UseTabsExam";

function App() {
  return (
    <div className="App">
      <h1>Hello React Hooks!!</h1>
      <UseStateExam />
      <UseInputExam />
      <UseTabsExam />
    </div>
  );
}

export default App;
