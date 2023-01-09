import styled from 'styled-components';

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${({justifyContent}) => justifyContent};
    grid-gap: 8px;
    ${({borderbAndPadding}) => borderbAndPadding && `
         border-bottom:  0.5px solid #19D6FF;
         padding-bottom: 4px;
    `}
   
`;