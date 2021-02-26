import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    console.log(props);
    // const productName = props.s.name;
    const {img, name, seller, price, stock} = props.product;
    
    function sbc() {
        return(
            2+3
        )
        
    }
    
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                {}
                <p><small>Only {stock} left in stock -Order soon</small></p>
                <button 
                    className="product-botton" 
                    onClick= {() => props.hendleAddProduct(props.product)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart}/> add to card
                </button>
            </div>        
        
        </div>
    );
};

export default Product;