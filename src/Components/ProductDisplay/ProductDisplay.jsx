import React from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
    const { product } = props;

    return (
        <div className='product-display'>
            <div className='product-display-left'>
                <div className='product-display-img-list'>
                    <img src={product.image} alt={`${product.name} thumbnail 1`} />
                    <img src={product.image} alt={`${product.name} thumbnail 2`} />
                    <img src={product.image} alt={`${product.name} thumbnail 3`} />
                    <img src={product.image} alt={`${product.name} thumbnail 4`} />
                </div>
                <div className='product-display-img'>
                    <img className='product-display-main-img' src={product.image} alt={`${product.name} main`} />
                </div>
            </div>

            <div className='product-display-right'>
                <h1>{product.name}</h1>
                <div className='product-display-rating'>
                    <img src={star_icon} alt='Star rating' />
                    <img src={star_icon} alt='Star rating' />
                    <img src={star_icon} alt='Star rating' />
                    <img src={star_icon} alt='Star rating' />
                    <img src={star_icon} alt='Star rating' />
                    <img src={star_dull_icon} alt='Empty star rating' />
                    <p>(120)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-old'>{product.old_price}</div>
                    <div className='productdisplay-right-price-new'>{product.new_price}</div>
                </div>

                <div className='productdisplay-right-description'>
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckilne and short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className='productdisplay-right-category'><Span>category:</Span>Women, T-shirt, Crop Top</p>
                <p className='productdisplay-right-category'><Span>Tags:</Span>Modern, Latest, Crop Top</p>
            </div>
        </div>
    );
}
export default ProductDisplay;
