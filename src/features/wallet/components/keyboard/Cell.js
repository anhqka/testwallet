import styled from 'styled-components';

export const Cell = styled.main`
  background: #1f2128;
  grid-area: ${({cell}) => cell};
  padding: 0.25rem;
`;