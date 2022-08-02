import { Carousel, CarouselItem } from '.';

interface CarouselImagesProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export const CarouselImages = ({ images }: CarouselImagesProps) => {
  return (
    <Carousel>
      {images.map((image, i) => (
        <CarouselItem key={i} label={`Slide ${i} de ${images.length}`}>
          <img draggable="false" src={image.src} alt={image.alt} />
        </CarouselItem>
      ))}
    </Carousel>
  );
};
