import styled from 'styled-components';
import { EventCSS } from './pages/Event';

export const ContainerCSS = styled.main`
  --section-margin: 6rem;
  width: 100%;

  > section {
    margin: var(--section-margin) auto;

    > .info-row {
      p {
        margin: 0 1rem 1rem 0;
        span {
          color: var(--color-primary);
        }
      }

      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
  }

  > section.event {
    ${EventCSS}
  }
`;
