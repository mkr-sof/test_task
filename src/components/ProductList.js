// ProductList.js
import React, {useEffect, useState} from 'react';
import {Product, Wrapper} from "./index";
import PropTypes from "prop-types";
import Api from "../Api";

// const ProductList = ({ productDetails }) => {
//     console.log(productDetails)
//     if (!Array.isArray(productDetails)) {
//         console.error("Products prop should be an array.");
//         return null; // or return some error message or fallback UI
//     }
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {productDetails.map(product => (
//                 <Product key={product.ids.id} product={product} />
//             ))}
//         </div>
//     );
// };
//
// ProductList.propTypes = {
//     products: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             name: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired,
//             price: PropTypes.number.isRequired
//         })
//     )
// };
//
// export default ProductList;

const ProductList = () => {
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const productIds = await Api.getIds(0, 50);
                const productDetailsData = await Api.getItems(productIds);
                setProductDetails(productDetailsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProductDetails();
    }, []);

    if (!productDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productDetails.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
