import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function ProductDetails() {
    const params = useParams();

    let [product, setProduct] = useState({});

    function getSingleProduct() {
        fetch("http://localhost:1111/products/" + params.productId)
            .then(json => json.json())
            .then(res => setProduct(res))
    }

    useEffect(() => {
        getSingleProduct()
    }, [])

    return (
        <div className="text-center">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <h3>{product.category}</h3>
            <p>{product.description}</p>
            <h4>Price : {product.price}</h4>
            <h4>Number in stock : {product.stock}</h4>
        </div>
    )
}
