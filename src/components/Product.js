import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import Api from "../Api";
import {Wrapper} from "./index";



const Product = () => {
    const [productDetails, setProductDetails] = useState(null);


    useEffect(() => {

        const fetchProductDetails = async  () => {
            try {
                // const productDetailsData = await Api.getItems([product.id]);
                const productIds = await Api.getIds(0, 50);
                // console.log(productIds)  //it ok logged ids
                const productDetailsData = await Api.getItems(productIds);
                // setProductDetails(productDetailsData);
                const sortedProducts = productDetailsData.sort((a, b) => a.id.localeCompare(b.id));
                setProductDetails(sortedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        };

        fetchProductDetails();
    }, []);

    console.log(productDetails);   //here ok too I see data in console


    return (
<div  className="flex flex-wrap bg-gray-500 p-8 rounded-md shadow-md">
    {productDetails?  (
        productDetails.map((product) => (
            <div key={product.id} className="bg-white rounded-md p-4 shadow-md mb-4"> {/* Ensure each element has a unique key */}
                <h2 className="text-xl font-bold mb-2">{product.brand ? product.brand : "Unknown Brand"}</h2>
                <p className="text-lg mb-2">{product.product}</p>
                <p className="text-green-700 font-bold">${product.price}</p>
            </div>
        ))
    ): (
        <div className="flex justify-center items-center h-40">
            <p className="text-center">Loading...</p>
        </div>

    )}
</div>
    );
};

Product.propTypes = {
    productDetails: PropTypes.shape({
        brand: PropTypes.string,
        id: PropTypes.string.isRequired,
        product: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
};

export default Product;
