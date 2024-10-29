import { Link } from "react-router-dom";
import './Item.css'; // Importa el archivo CSS

export default function Item({ id, name, price, img }) {
    return (
        <div className="item-container"> {/* Contenedor para el item */}
            <Link to={`/products/${id}`}>
                <div className="item-image"> {/* Contenedor para la imagen */}
                    <img src={img} alt="Imagen Productos" />
                </div>
            </Link>

            <Link to={`/products/${id}`} className="item-name">
                {name}
            </Link>

            <h4 className="item-price">$ {price}</h4>
        </div>
    );
}