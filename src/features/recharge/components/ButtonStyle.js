import styled from 'styled-components';

export const ButtonStyle = styled.button`
    font-size: ${({textSize}) => textSize };
    color: ${({textColor}) => textColor};
    width: ${({w}) => w};
    font-weight: ${({textWeight}) => textWeight};
    padding-bottom: ${({pb}) => pb};
    padding: ${({p}) => p};
    text-align: ${({textAlign}) => textAlign};
    flex: ${({flex}) => flex};
    background-color: ${({bg}) => bg};
    outline: none;
    border-radius: ${({bRadius}) => bRadius};
    border: none;
    ${({ bg }) => bg
    ? `
         background-color: #19D6FF;
         color:  #013E58;
         font-weight: 600;
    `
    : `
      background-color: #015A80;
      color: #15A0BE;
      font-weight: 600;
    `}
`;