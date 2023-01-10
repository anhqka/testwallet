import styled from 'styled-components';

export const FlexRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: ${({justifyContent}) => justifyContent};
    align-items: ${({alignItems}) => alignItems};
    grid-gap: ${({gap}) => gap};
    z-index: ${({z}) => z};
    background-color: ${({bg}) => bg};
    position: ${({position}) => position};
    padding-bottom: ${({pb}) => pb};
    padding-top: ${({pt}) => pt};
`;