import styled from 'styled-components';


const ContainerKeyboard = styled.div`
  width: 99%;
  padding: 1.5px;
  position: fixed;
  transition: all 0.5s ease-out;
  ${({showKeyboard}) => showKeyboard === false ? "bottom: -200px" : `bottom: 0`}
`;

const Keyboard = styled.div`
  display: grid;
  grid-template-areas:
  "number1 number2 number3 "
  "number4 number5 number6"
  "number7 number8 number9"
  ". number0 remove";
  text-align: center;
  width: 98.5%;
  padding: 3px;
  background: #013E58;
;
`;

export {Keyboard, ContainerKeyboard}