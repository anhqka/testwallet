import styled from 'styled-components';

export const FlexCol = styled.div`
    display: flex;
    background-color: ${({bg}) => bg};
    flex-direction: column;
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    margin: ${({m}) => m};
    grid-gap: 8px;
    padding: ${({p}) => p}; 
    border-radius: 16px;
`;