import { useRef, useState } from "react";

const TestInputOtp = () => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const input6 = useRef();

  const [nowInput, setNowInput] = useState(1)

  const focusInput = () => {
    
    if (input1.current.value.length === 1) {
      input2.current.focus();
      setNowInput(2)
    }
    if (input2.current.value.length === 1) {
      input3.current.focus();
      setNowInput(3)
    }
    if (input3.current.value.length === 1) {
      input4.current.focus();
      setNowInput(4)
    }
    if (input4.current.value.length === 1) {
      input5.current.focus();
      setNowInput(5)
    }
    if (input5.current.value.length === 1) {
      input6.current.focus();
      setNowInput(6)
    }
  };

  const onChange = (e) => {
    focusInput()
    // console.log(e.target.value)
  };

  const onKeyDown = (e) => {
      if(e.nativeEvent.key === 'Backspace'){
        if(!e.target.value){
          console.log(nowInput);
          if (nowInput === 2) {
            input1.current.focus();
            setNowInput(1)
          }
          if (nowInput === 3) {
            input2.current.focus();
            setNowInput(2)
          }
          if (nowInput === 4) {
            input3.current.focus();
            setNowInput(3)
          }
          if (nowInput === 5) {
            input4.current.focus();
            setNowInput(4)
          }
          if (nowInput === 6) {
            input5.current.focus();
            setNowInput(5)
          }
        }
      }
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
          type="number" pattern="[0-9]*" inputmode="numeric"
          ref={input1}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onClick={onClick}
        />
        <input
          maxLength={1}
          type="number" pattern="[0-9]*" inputmode="numeric"
          ref={input2}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onClick={onClick}
        />
        <input
          maxLength={1}
          type="number" pattern="[0-9]*" inputmode="numeric"
          ref={input3}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onClick={onClick}
        />
        <input
          maxLength={1}
          type="number" pattern="[0-9]*" inputmode="numeric"
          ref={input4}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onClick={onClick}
        />
        <input
          maxLength={1}
          type="number" pattern="[0-9]*" inputmode="numeric"
          ref={input5}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onClick={onClick}
        />
        <input
          maxLength={1}
          type="number" pattern="[0-9]*" inputmode="numeric"
          ref={input6}
          onChange={onChange}
          onClick={onClick}
          onKeyDown={onKeyDown}
        />
      </form>
    </div>
  );
};

export default TestInputOtp;
