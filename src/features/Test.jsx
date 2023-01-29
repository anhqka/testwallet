import { useEffect, useRef, useState } from "react";

const TestInputOtp = () => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const input6 = useRef();

  const focusInput = () => {
    if (input1.current.value.length === 1) {
      input2.current.focus();
    }
    if (input2.current.value.length === 1) {
      input3.current.focus();
    }
    if (input3.current.value.length === 1) {
      input4.current.focus();
    }
    if (input4.current.value.length === 1) {
      input5.current.focus();
    }
    if (input5.current.value.length === 1) {
      input6.current.focus();
    }
  };

  const onChange = () => {
    focusInput()
  };

  const onClick = () => {
    input1.current.focus();
    focusInput()
  };

  return (
    <div>
      <form>
        <input
          maxLength={1}
          mode="numeric"
          ref={input1}
          onChange={onChange}
          onClick={onClick}
        />
        <input
          maxLength={1}
          mode="numeric"
          ref={input2}
          onChange={onChange}
          onClick={onClick}
        />
        <input
          maxLength={1}
          mode="numeric"
          ref={input3}
          onChange={onChange}
          onClick={onClick}
        />
        <input
          maxLength={1}
          mode="numeric"
          ref={input4}
          onChange={onChange}
          onClick={onClick}
        />
        <input
          maxLength={1}
          mode="numeric"
          ref={input5}
          onChange={onChange}
          onClick={onClick}
        />
        <input
          maxLength={1}
          mode="numeric"
          ref={input6}
          onChange={onChange}
          onClick={onClick}
        />
      </form>
    </div>
  );
};

export default TestInputOtp;
