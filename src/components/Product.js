import React, { useContext, useReducer, useState } from 'react'
import './Product.css'
import { stateContext } from '../App'
import { useStateValue } from './StateProvider'

function Product({id,title,price,image,rating}){
    // const stateConsumer=useContext(stateContext)
    // const [{basket},dispatch]=stateConsumer
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

    
    return(
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {
                        Array(rating).fill().map((_,i)=>(
                            <p key={i}>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image}/>
            
            <button onClick={addToBasket}>Add to Cart</button>

        </div>
    )
}
export default Product