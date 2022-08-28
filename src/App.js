import React from "react";
import "./styles.css";
import UseStateExam from "./exam/UseStateExam";
import UseInputExam from "./exam/UseInputExam";

function App() {
  return (
    <div className="App">
      <h1>Hello React Hooks!!</h1>
      <UseStateExam />
      <UseInputExam />
    </div>
  );
}

export default App;
