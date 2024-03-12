import { Link } from "react-router-dom";
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/budget">Budget</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/api-test">API Test</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;