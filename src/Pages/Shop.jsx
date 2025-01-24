import React from 'react';
import { useState } from 'react';
import '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';

function Shop() {
    return (
        <div className='shop'>
            <Hero />
            <Popular />
            <Offers />
        </div>
    );
}

export default Shop;