import styled from 'styled-components';

export const FlexRow = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: ${({justifyContent}) => justifyContent};
    grid-gap: 8px;
    z-index: ${({z}) => z};
    background-color: ${({bg}) => bg};
    position: ${({position}) => position};
    padding-bottom: ${({pb}) => pb};
   
`;