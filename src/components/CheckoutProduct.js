import React from 'react';
import { useStateValue } from '../StateProvider';
import './checkOutProduct.css';

function CheckoutProduct({id,image,title,price,rating}) {

    const [{basket},dispatch] = useStateValue()
    const removeFromBasket = () =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id

        })
    }
    return (
        <div className='checkout-product'>
            <img src={image} alt="" className="checkout-product-img"/>

            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                    <small>$</small> <strong>{price}</strong>
                </p>
                <div className="checkout-product-rating">
                    {Array(rating).fill().map((_,i)=>(
                            <p> * </p>
                        ))}
                </div>

                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
