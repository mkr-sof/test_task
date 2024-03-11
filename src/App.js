import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Wrapper, NavBar, Header, Footer, Product, ProductList} from './components'
import {HomePage, ProductPage, NotFoundPage} from './pages'
import './App.css';




const App = () => {
  return (
      <Router>

          <Routes>
              {/*<Route path="/" element={<HomePage />}/>*/}
              {/*<Route path="products/:id" element=<ProductPage match /> />*/}
              <Route path="/" element={<Product />}/>
              <Route path="/products" element=<ProductList products />/>
              {/*<Route element=<NotFoundPage />/>*/}
          </Routes>

      </Router>
  );
};

export default App;
