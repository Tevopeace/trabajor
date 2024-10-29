import Item from "../Item/Item";
import { getProducts } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import './ItemList.css'; // Asegúrate de importar el archivo CSS

export default function ItemList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="item-list flex flex-wrap">
                    {products.map((prod) => (
                        <Item {...prod} key={prod.id} />
                    ))}
                </div>
            )}
        </>
    );
}