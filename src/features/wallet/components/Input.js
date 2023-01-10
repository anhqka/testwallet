import styled from 'styled-components';

export const Input = styled.input.attrs(({mode}) => ({ 
        inputMode: mode,
    }))`
    background: none;
    outline: none;
    color: #19D6FF;
    border: none;
`;