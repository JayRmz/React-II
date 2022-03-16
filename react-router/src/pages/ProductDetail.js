import react from "react";
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const params = useParams();
    console.log(params)

    return (
        <section>
            <h1> Product Detail</h1>
            <p> {params.prodId}</p>
        </section>
    )
}

export default ProductDetail;