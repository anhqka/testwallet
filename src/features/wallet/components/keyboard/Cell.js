import styled from 'styled-components';

const SubmitCell = styled.span`
  background-color: #004766;
  padding: 12px 24px;
`;

const Cell = styled.span`
  background: #1f2128;
  grid-area: ${({cell}) => (  cell === 1 ? "number1" : cell === 2 ? "number2" : cell === 3 ? "number3" : cell === 4 ? "number4" : cell === 5 ? "number5" : cell === 6 ? "number6" : cell === 7 ? "number7" : cell === 8 ? "number8" : cell === 9 ? "number9" : cell === 10 ? "number0" : cell === 11 ? "." : "remove" )};
  padding: 12px 24px;
  background:${({cell}) => ( cell === 0 ? "#004766" : "#7396A5" )} ;
  margin: 3px;
`;

export {Cell, SubmitCell}