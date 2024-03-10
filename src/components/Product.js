import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import Api from "../Api";



const Product = ({id, product, brand, price }) => {
    const [productDetails, setProductDetails] = useState([]);


    useEffect(() => {

        const fetchProductDetails = async  () => {
            try {
                // const productDetailsData = await Api.getItems([product.id]);
                const productIds = await Api.getIds(0, 50);
                console.log(productIds)
                const productDetailsData = await Api.getItems(productIds);
                setProductDetails(productDetailsData);
                console.log(product)
            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        };




        fetchProductDetails().then(details => {
            setProductDetails(details);
        }).catch(error => {
            console.error('Error fetching products:', error);
        });
    }, [productDetails]);

    return (
<div>
    {productDetails? (
        <>
            <h2>{brand}</h2>
            <p>{product}</p>
            <p>${price}</p>
        </>
    ): (
        <p>Loading...</p>
    )}
</div>
    );
};

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
};

export default Product;
