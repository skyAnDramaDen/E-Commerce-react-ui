import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';

export default function ShopCategory(props) {
    const  { all_products } = useContext(ShopContext);
    return (
        <div className='shop-category'>
            <img src={props.banner} alt='' />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort"></div>
            </div>
        </div>
    )
}