import styled from 'styled-components';

export const Image = styled.img.attrs(({src}) => ({
        src: src
    }))`
    width: ${({w}) => w};
    height: ${({h}) => h};
`;