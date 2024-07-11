import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props;

    if (!product) {
        return null; // Handle case where product is not provided
    }

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt='Arrow icon'/> Shop <img src={arrow_icon} alt='Arrow icon'/>{product.category} <img src={arrow_icon} alt='Arrow icon' /> {product.name}
        </div>
    );
};

export default Breadcrum;
