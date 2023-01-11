import styled from 'styled-components';

export const GridRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    justify-content: ${({justifyContent}) => justifyContent};
    align-items: ${({alignItems}) => alignItems};
    grid-gap: ${({gap}) => gap};
    z-index: ${({z}) => z};
    background-color: ${({bg}) => bg};
    position: ${({position}) => position};
    padding-bottom: ${({pb}) => pb};
    padding-top: ${({pt}) => pt};
    border-bottom: ${({borderB}) => borderB};
`;