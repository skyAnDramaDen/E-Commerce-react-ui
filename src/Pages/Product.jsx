import React, { useContext } from 'react';
import { useState } from 'react';
import './CSS/Product.css';
import { Link, useParams } from 'react-router-dom';

import { ShopContext } from '../Context/ShopContext';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

function Product() {
    const { all_products } = useContext(ShopContext);

    const params = useParams();

    const product_id = params.id;

    const product = all_products.find((prod) => {
        return prod.id === Number(product_id);
    })

    return (
        <div className='product'>
            <Breadcrumb product = {product} />
            <ProductDisplay product = {product} />
        </div>
    );
}

export default Product;