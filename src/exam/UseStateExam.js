import React, { useState } from "react";
import "../styles.css";

function UseStateExam() {
  const [item, setItem] = useState(1);
  const up = () => setItem(item + 1);
  const down = () => setItem(item - 1);

  return (
    <div>
      <h1>useState {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={up}>up</button>
      <button onClick={down}>down</button>
    </div>
  );
}

// 클래스를 사용한 useState
// class UseStateExamclass extends React.Component {
//   state = {
//     item: 1
//   };
//   render() {
//     const { item } = this.state;
//     return (
//       <div>
//         <h1>Hello {item}</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <button onClick={this.up}>up</button>
//         <button onClick={this.down}>down</button>
//       </div>
//     );
//   }

//   up = () => {
//     this.setState((state) => {
//       return {
//         item: state.item + 1
//       };
//     });
//   };

//   down = () => {
//     this.setState((state) => {
//       return {
//         item: state.item - 1
//       };
//     });
//   };
// }

export default UseStateExam;
