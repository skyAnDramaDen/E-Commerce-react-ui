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
import Footer from './Components/Footer/Footer';

import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Shop />}>Home</Route>
          <Route path='/mens' element={<ShopCategory banner={ men_banner } category ='men' />}>Men</Route>
          <Route path='/womens' element={<ShopCategory banner={ women_banner } category ='women' />}>Women</Route>
          <Route path='/kids' element={<ShopCategory banner={ kid_banner } category ='kid' />}>Kids</Route>
          <Route path='/product/:id' element={<Product />}>
            
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;