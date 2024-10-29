import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import './home.css'; // Asegúrate de importar el archivo CSS

export default function HomePage() {
    return (
        <div>
            <div className="banner">
                <img src="./w2.jpg" alt="Banner" className="banner-image" /> {/* Cambia la ruta a tu imagen */}
                <div className="banner-container">
                    <div className="banner-title-container">
                        <h2 className="banner-title">Compra</h2>
                        <h2 className="banner-title">tu producto</h2>
                        <h2 className="banner-title">favorito</h2>
                    </div>
                    <Link to="/" className="shop-button">Ver catalogo</Link>
                </div>
            </div>
            <div className="item-list-container">
                <ItemList />
            </div>
        </div>
    );
}