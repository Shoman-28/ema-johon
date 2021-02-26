import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    
    const fack10 = fakeData.slice(0,10);
    const[products, setProduct] = useState(fack10);
    const[cart, setCart] = useState([])

    const hendleAddProduct = (product) =>{
        const productItem =['product-added', product];
        const newCart = [...cart, product];
        setCart (newCart)
    }
  

    return (        
        <div className="shop-container">
            <div className="product-container">
                {
                products.map(pd => <Product 
                    hendleAddProduct={hendleAddProduct}
                    product={pd}></Product>) 
                }
                
            </div>
            <div className="card-container">
               <Cart cartt={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;