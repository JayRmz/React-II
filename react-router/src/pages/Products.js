import React from "react";
import { Link } from "react-router-dom";


const Products = () => {
    return (
        <section>
            <h1> Products page!</h1>
            <ul>
                <li> <Link to='/products/p1'>Prod 1</Link></li>
                <li> <Link to='/products/p2'>Prod 2</Link></li>
                <li> <Link to='/products/p3'>Prod 3</Link></li>

            </ul>
        </section>
    )
}

export default Products;