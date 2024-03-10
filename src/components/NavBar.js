import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                {/* here must be input to filter by id and brand */}
            </ul>
        </nav>
    );
};

export default NavBar;
