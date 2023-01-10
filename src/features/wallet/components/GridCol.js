import styled from 'styled-components';

export const GridCol = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: ${({gridCol}) => gridCol};
    grid-gap: ${({gap}) => gap};
`;