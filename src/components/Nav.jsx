import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products/1">First Product</Link>
        </li>
        <li>
          <Link to="/products/2">Second Product</Link>
        </li>
      </ul>
    </nav>
  );
};
