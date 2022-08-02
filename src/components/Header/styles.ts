import styled, { css } from 'styled-components';

interface ContainerCSSProps {
  transparent: boolean;
}

export const ContainerCSS = styled.header<ContainerCSSProps>`
  position: fixed;
  display: flex;
  justify-content: ${({ transparent }) =>
    transparent ? 'flex-end' : 'space-between'};
  background-color: rgba(var(--color-background100), 0.9);

  top: 0;
  width: 100%;
  z-index: 10;
  padding: 1rem 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

  > section button {
    margin-right: 1rem;
  }

  ${({ transparent }) =>
    transparent &&
    css`
      background-color: transparent;
      box-shadow: unset;
    `}
`;
