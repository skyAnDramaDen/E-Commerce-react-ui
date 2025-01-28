import React from 'react';
import './Popular.css';
import Item from '../Item/Item';

import data_product from '../Assets/data';

export default function Popular() {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {
                data_product.map(function(item, i) {
                  return <Item key={i} product = {item} />
                })
            }
        </div>
    </div>
  )
}