import React from "react";
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
function CheckoutProduct({id,title,price,image,rating,quantity}){
    const [{basket,totalPrice,cartCount},dispatch]=useStateValue()
    const addToBasket=()=>{
        const isInBasket=basket.find(item=>item.id === id)
        if(isInBasket){
            dispatch({
                type:'INCREASE_QUANTITY',
                id:id
            })
        }else{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                price:price,
                image:image,
                rating:rating,
                quantity:1
            }
        })
        }
        dispatch({
            type:'UPDATE_TOTAL_PRICE',
            totalPrice:totalPrice+price
        })
        dispatch({
            type:'UPDATE_CART_COUNT',
            cartCount:cartCount+1
        })

    }
    const removeFromBasket=()=>{
        
        dispatch({
            type:'DECREASE_QUANTITY',
            id:id,
            price:price
        })
        dispatch({
            type:'REDUCE_TOTAL_PRICE',
            totalPrice:totalPrice-price
        })
        dispatch({
            type:'REDUCE_CART_COUNT',
            cartCount:cartCount-1
        })
    }
    const isInBasket=basket.find(item=>item.id === id)
    
    if(isInBasket ){
    return(
        
        <div className="checkoutproduct">
            <img className="checkoutproduct__image" src={image}/>
            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">
                    {title}
                </p>
                <p className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                    {
                        Array(rating).fill().map((_,i)=>(<p key={i}>⭐</p>))
                    }
                </div>
                
                <div><button onClick={removeFromBasket}>-</button>{quantity}<button onClick={addToBasket}>+</button></div>
                


            </div>

        </div>
    )}
}
export default CheckoutProduct