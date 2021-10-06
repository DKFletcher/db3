import { ReactElement } from 'react';

export interface HeadingProps {
  title: string;
}

// export function List<ListItem>({
//   items,
//   render,
// }: {
//   items: ListItem[];
//   render: (item: ListItem) => ReactNode;
// }) {
//   return (
//     <ul>
//       {items.map((item, index) => {
//         return <li key={index}>{render(item)}</li>;
//       })}
//     </ul>
//   );
// }

type ListComponent = <ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactElement | null;
}) => ReactElement | null;

export const List: ListComponent = ({ items, render }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{render(item)}</li>;
      })}
    </ul>
  );
};

export const Heading = ({ title }: HeadingProps) => {
  return <h3>{title}</h3>;
};

export function TestComponent() {
  return (
    <div>
      <Heading title="Hello default" />
      <List items={['a', 'b', 'c']} render={(str) => <strong>{str} </strong>} />
    </div>
  );
}

export default TestComponent;
