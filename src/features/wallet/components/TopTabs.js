import styled from 'styled-components';

export const TopTabs = styled.button`
  border: none;
  margin: ${({m}) => m};
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 16px;
  ${({ bg }) => bg
    ? `
         background-color: #015A80;
         color:  #19D6FF;
         
    `
    : `
      background-color: #013E58;
      color: #15A0BE;
    `}
`;