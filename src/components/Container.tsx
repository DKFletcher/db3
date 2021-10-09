import { ContainerWrapper } from '../elements';
export const Container = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};
