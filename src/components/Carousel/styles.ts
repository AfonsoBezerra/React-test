import styled from 'styled-components';

export const ContainerCSS = styled.div`
  user-select: none;
  display: none;

  max-width: 100%;
  max-height: 100vh;

  .embla {
    overflow: hidden;
    max-width: 100%;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    position: relative;
    overflow: hidden;
    flex: 0 0 100%;
  }

  @media (min-width: 600px) {
    display: block;
  }
`;
