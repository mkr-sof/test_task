import React from 'react';
import Footer from './Footer';
import {Header, NavBar} from "./index";

function Wrapper(props) {
    return (
        <div id="wrapper">
            <Header/>
            <NavBar/>
            {props.children}
            <Footer/>
        </div>
    );
}

export default Wrapper;
