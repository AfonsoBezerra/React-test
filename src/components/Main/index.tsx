import { ContainerCSS } from './styles';

interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <ContainerCSS>{children}</ContainerCSS>;
};
