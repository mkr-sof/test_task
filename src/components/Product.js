import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import Api from "../Api";



const Product = () => {
    const [productDetails, setProductDetails] = useState(null);


    useEffect(() => {

        const fetchProductDetails = async  () => {
            try {
                // const productDetailsData = await Api.getItems([product.id]);
                const productIds = await Api.getIds(0, 50);
                console.log(productIds)  //it ok logged ids
                const productDetailsData = await Api.getItems(productIds);
                setProductDetails(productDetailsData);
            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        };

        fetchProductDetails();
    }, []);

    console.log(productDetails);   //here ok too I see data in console


    return (
<div  className="bg-gray-100 p-8 rounded-md shadow-md">
    {productDetails? (
        <>
            <h2 className="text-xl font-bold mb-2">{productDetails.brand ? productDetails.brand : "Unknown Brand"}</h2>
            <p className="text-lg mb-2">{productDetails.product}</p>
            <p className="text-green-700 font-bold">${productDetails.price}</p>
        </>
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
