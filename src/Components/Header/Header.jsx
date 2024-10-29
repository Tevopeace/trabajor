import Navbar from "../Navbar/Navbar";
import './Header.css';

export default function HeaderComponent() {
    const Logo = '/logo11.png';
    return (
        <div className="container">
            <div className="header">
                <div className="logo-container">
                    <img src={Logo} alt="Logo Principal" className="logo" />
                    <h1 className="logo-text">EGAMES</h1> {/* Añadido className para el texto */}
                </div>
                <div><Navbar /></div>
            </div>
        </div>
    );
}