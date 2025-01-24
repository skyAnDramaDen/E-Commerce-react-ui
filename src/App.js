import './App.css';
import $ from 'jquery';
import { useState, useEffect } from 'react';
import NavBar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Shop}>Home</Route>
          <Route path='/mens' element={<ShopCategory categroy ='men' />}>Men</Route>
          <Route path='/womens' element={<ShopCategory categroy ='women' />}>Women</Route>
          <Route path='/kids' element={<ShopCategory categroy ='kid' />}>Kids</Route>
          <Route path='/product' element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <NavBar />
        <Shop />
      </BrowserRouter>
    </div>
  );
}

export default App;