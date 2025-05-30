import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/new">New restaurant</Link></li>
        <li><Link to="/">Restaurants</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
