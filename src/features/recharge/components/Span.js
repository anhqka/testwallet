import styled from 'styled-components';

export const Span = styled.span`
    font-size: ${({textSize}) => textSize };
    color: ${({textColor}) => textColor};
    font-weight: ${({textWeight}) => textWeight};
    padding-bottom: ${({pb}) => pb};
    text-align: ${({textAlign}) => textAlign};
    flex: ${({flex}) => flex};
    background-color: ${({bg}) => bg};
`;