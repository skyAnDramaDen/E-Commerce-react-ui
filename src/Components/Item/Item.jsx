import React from 'react';
import item from './Item.css';
import { Link } from 'react-router-dom';

export default function Item( props ) {
  return (
    <div className='item'>
        <Link to={`/product/${props.product.id}`}>
          <img src={props.product.image} alt="" className='resized-image'/>
        </Link>
        <p>{ props.product.name }</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${ props.product.new_price }
            </div>
            <div className="item-price-old">
                ${ props.product.old_price }
            </div>
        </div>
    </div>
  )
}
