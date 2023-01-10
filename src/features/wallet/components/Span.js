import styled from 'styled-components';

export const Span = styled.span`
    font-size: ${({textSize}) => textSize };
    color: ${({textColor}) => textColor};
    font-weight: ${({textWeight}) => textWeight};
`;