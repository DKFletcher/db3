import { RouteComponentProps } from 'react-router-dom';

type TParams = { id: string };

export const Product = ({ match }: RouteComponentProps<TParams>) => {
  return <h2>This is a page for product with id: {match.params.id}</h2>;
};
