import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';

export default function Breadcrumb( props ) {

  console.log(props);
  
  return (
    <div className='breadcrumb'>
        HOME <img src= {arrow_icon} />
        SHOP <img src={arrow_icon} alt="" />
        { props.product.category } <img src={arrow_icon} alt="" />
        { props.product.name } <img src={arrow_icon} alt="" />
    </div>
  )
}
