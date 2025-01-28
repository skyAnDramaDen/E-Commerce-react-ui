import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

export default function ProductDisplay(props) {
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={ props.product.image } alt="" />
                <img src={ props.product.image } alt="" />
                <img src={ props.product.image } alt="" />
                <img src={ props.product.image } alt="" />
            </div>
            <div className="productdisplay-img">
                <img src={ props.product.image } alt="" className='productdisplay-main-img' />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{ props.product.name }</h1>
            <div className="productdisplay-right-star">
                <img src={ star_icon } alt="" />
                <img src={ star_icon } alt="" />
                <img src={ star_icon } alt="" />
                <img src={ star_icon } alt="" />
                <img src={ star_dull_icon } alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${ props.product.old_price }</div>
                <div className="productdisplay-right-price-new">${ props.product.new_price }</div>
            </div>
        </div>
    </div>
  )
}
