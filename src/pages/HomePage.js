import React, {useEffect, useState} from 'react';
import {ProductList, Wrapper} from "../components";
import ReactPaginate from "react-paginate";
import Api from "../Api";


const HomePage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([])
    const itemPerPage = 5;
    const [totalProducts, setTotalProducts] = useState(0)

    useEffect(() => {
        fetchData(currentPage)
    }, [currentPage]);

    const fetchData = async (page) => {
        try {
    const offset = page * itemPerPage;
    const ids = await Api.getIds(offset, itemPerPage);
    const fetchedProducts = await Api.getItems(ids);
    setProducts(fetchedProducts);
    setTotalProducts(fetchedProducts.length);

        }catch(error){
            console.error('error fetching data:', error)
        }
    };

    const handlePageClick = ({selected}) => {
        setCurrentPage(selected);
    };

    const pageCount = Math.ceil(totalProducts / itemPerPage);

    return (
        <Wrapper>
            <h1>Welcome to our Online Store</h1>
            <p>Explore our latest products below:</p>
            <ProductList products = {products} />

            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                activeClassName="active"
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
            />
        </Wrapper>
    );
};

export default HomePage;

