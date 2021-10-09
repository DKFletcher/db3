import { DefaultTheme } from 'styled-components';
import { ContainerWrapper } from '../elements';

interface props {
  theme: DefaultTheme;
}

export const Container = (
  {
    children,
  }: {
    children: JSX.Element;
  },
  { theme }: props
): JSX.Element => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};
