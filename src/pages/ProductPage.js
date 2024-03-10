import React, {useEffect, useState} from 'react';
import Api from "../Api";


const ProductPage = ({ match }) => {
    const productId = match.params.id;
    const [product, setProduct] = useState(null)
    const sortedProduct = product.find(product => product.id === productId);

useEffect(() => {
    const fetchProductById = async () => {
        try{
            const response = await Api.getIds(0, 50);
            setProduct(response.data);
        }catch(error){
            console.error(error)
        }
    };

    fetchProductById();
}, [productId])

       if (!sortedProduct) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>Product Details</h1>
            <h2>{sortedProduct.product}</h2>
            <p>{sortedProduct.brand}</p>
            <p>Price: ${sortedProduct.price}</p>
        </div>
    );
};

export default ProductPage;

