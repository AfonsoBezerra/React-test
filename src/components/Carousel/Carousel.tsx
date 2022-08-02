import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { ContainerCSS } from './styles';

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, draggable: false },
    [Autoplay({ delay: 1000 * 5 })], // 5 seconds
  );

  return (
    <ContainerCSS tabIndex={0} aria-roledescription="slides">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container" aria-live="polite">
          {children}
        </div>
      </div>
    </ContainerCSS>
  );
};
