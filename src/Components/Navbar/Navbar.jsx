import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de crear este archivo CSS

export default function Navbar() {
    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Shop</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
