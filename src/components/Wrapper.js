import React from 'react';
import Footer from './Footer';
import {Header, NavBar} from "./index";

function Wrapper(props) {

    return (
        <div id="wrapper"  className="min-h-screen flex flex-col p-4">
            <Header/>
            <NavBar/>
            <main className="flex-grow">{props.children}</main>
            <Footer/>
        </div>
    );
}

export default Wrapper;
