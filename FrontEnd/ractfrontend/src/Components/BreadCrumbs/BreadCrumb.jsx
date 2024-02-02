import React from 'react';
import './BreadCrumb.css';
import arrow_icon from  '../Assets/breadcrum_arrow.png';
export const BreadCrumb = (props) => {
    const {product}=props;
    console.log(props);
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt=''/> Shop
        <img src={arrow_icon} alt=''/> {product.category} 
        <img src={arrow_icon} alt=''/> 
    </div>
  )
}
