import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [filterPrice, setFilterPrice] = useState('');
    const [filterBrand, setFilterBrand] = useState('');

    const handlePriceChange = (e) => {
        setFilterPrice(e.target.value);
    };

    const handleBrandChange = (e) => {
        setFilterBrand(e.target.value);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex items-center">
                <li className="mr-6">
                    <Link to="/" className="text-white">Home</Link>
                </li>
                <li className="mr-6">
                    <Link to="/products" className="text-white">Products</Link>
                </li>
                <li className="mr-6">
                    <input
                        type="text"
                        placeholder="Filter by Price"
                        value={filterPrice}
                        onChange={handlePriceChange}
                        className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </li>
                <li>
                    <input
                        type="text"
                        placeholder="Filter by Brand"
                        value={filterBrand}
                        onChange={handleBrandChange}
                        className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;
