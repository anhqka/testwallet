import styled from 'styled-components';

export const WalletProviderIcon = styled.img.attrs(({ src }) => ({
  src: src
}))`
  font-size: 9px;
  position: absolute;
  right:0;
  top:0;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 9px;
  padding: 8px;
  background-color: #19D6FF;
  width: ${({ w }) => w};
  height: ${({ h }) => h};
`;
