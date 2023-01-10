import styled from 'styled-components';

export const Tabs = styled.span`
    font-size: ${({textSize}) => textSize };
    color: ${({textColor}) => textColor};
    font-weight: ${({textWeight}) => textWeight};
    padding-bottom: ${({pb}) => pb};
    text-align: ${({textAlign}) => textAlign};
    flex: ${({flex}) => flex};
    
    ${({ tabs }) => tabs
    ? `
        border-bottom: 2px solid #19D6FF;
        color: #19D6FF;
    `
    : `
        border-bottom: 2px solid #15A0BE; 
        color: #15A0BE;
    `}
`;