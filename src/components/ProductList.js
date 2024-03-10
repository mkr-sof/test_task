// ProductList.js
import React from 'react';
import {Product} from "./index";
import PropTypes from "prop-types";

const ProductList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
                <Product key={product.result.id} product={product} />
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    )
};

export default ProductList;
