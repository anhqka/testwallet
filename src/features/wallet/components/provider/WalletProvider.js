import styled from 'styled-components';

export const WalletProvider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    grid-gap: 8px;
    border-radius: 16px;
    border: 3px solid #19D6FF;
    position: relative;
`;
export const WalletProviderMoney = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 8px;
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

export const Money = styled.span`
    color: #19D6FF;
    padding: 8px;
`;
