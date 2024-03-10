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
            const uniqueProducts = response.data.filter((product, index, self) =>
                index === self.findIndex(p => p.id === product.id)
            );
            setProduct(uniqueProducts);
        }catch(error){
            console.error(error)
        }
    };

    fetchProductById();
}, [productId])

       if (!sortedProduct) {
        return <div className="text-center mt-8">Product not found</div>;
    }
    return (

        <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4">Product Details</h1>
            <h2 className="text-xl font-semibold mb-2">{sortedProduct.product}</h2>
            <p className="text-lg mb-2">{sortedProduct.brand}</p>
            <p className="text-lg font-bold">Price: ${sortedProduct.price}</p>
        </div>
    );
};

export default ProductPage;

