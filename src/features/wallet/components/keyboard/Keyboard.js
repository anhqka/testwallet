import styled from 'styled-components';

const Keyboard = styled.div`
  display: grid;
  grid-template-areas:
    "continue continue continue "
    "number1 number2 number3 "
    "number4 number5 number6"
    "number7 number8 number9"
    ". number0 remove";

    text-align: center;
    grid-gap: 0.25rem;
    position: fixed;
    width: 100vw;
    transition: all 0.5s ease-out;
    ${({showKeyboard}) => showKeyboard === false ? "bottom: -125px" : `bottom: 0`}
;
`;

export {Keyboard}