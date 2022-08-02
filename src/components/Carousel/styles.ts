import styled from 'styled-components';

export const ContainerCSS = styled.div`
  user-select: none;
  display: none;

  height: 100%;
  max-width: 100%;
  max-height: 100vh;

  .embla {
    overflow: hidden;
    max-width: 100%;
    height: 100%;
  }
  .embla__container {
    display: flex;
    height: 100%;
  }
  .embla__slide {
    position: relative;
    overflow: hidden;
    height: 100%;
    flex: 0 0 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 600px) {
    display: block;
  }
`;
