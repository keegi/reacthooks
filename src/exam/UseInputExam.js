import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function UseInputExam(initialValue) {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  // const email = useInput("@");
  return (
    <div>
      <h2>useInputExam</h2>
      <input placeholder="Name" {...name} />
      {/* <input placeholder="Email" {...email} /> */}
    </div>
  );
}

export default UseInputExam;
