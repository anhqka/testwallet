import styled from 'styled-components';

export const ButtonStyle = styled.button`
    font-size: ${({textSize}) => textSize };
    color: ${({textColor}) => textColor};
    width: ${({w}) => w};
    background-color: ${({bg}) => bg};
    font-weight: ${({textWeight}) => textWeight};
    padding-bottom: ${({pb}) => pb};
    padding: ${({p}) => p};
    text-align: ${({textAlign}) => textAlign};
    flex: ${({flex}) => flex};
    background-color: ${({bg}) => bg};
    outline: none;
    border-radius: ${({bRadius}) => bRadius};
    border: none;
`;