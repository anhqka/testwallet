import styled from 'styled-components';

export const FlexCol = styled.div`
    display: flex;
    background-color: #015A80;
    flex-direction: column;
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    margin: ${({m}) => m};
    grid-gap: 8px;
    padding: 16px; 
    border-radius: 16px;
`;