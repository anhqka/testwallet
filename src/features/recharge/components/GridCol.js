import styled from 'styled-components';

export const GridCol = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: ${({gridCol}) => gridCol};
    grid-gap: ${({gap}) => gap};
    ${({borderbAndPadding}) => borderbAndPadding && `
         border-bottom:  0.5px solid #19D6FF;
         padding-bottom: 4px;
    `}
`;