interface CarouselItemProps {
  children: React.ReactNode;
  label: string;
}

interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

const Container = ({ children, ...rest }: ContainerProps) => (
  <div {...rest}>{children}</div>
);

export const CarouselItem = ({ children, label }: CarouselItemProps) => {
  return (
    <Container
      tabIndex={0}
      className="embla__slide"
      role="group"
      aria-roledescription="slide"
      aria-label={label}
    >
      {children}
    </Container>
  );
};
