import React from "react";

export const initialState = {
    basket: [],
    totalPrice:0,
    cartCount:0,
    user: null
}
export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0)
}

export const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'INCREASE_QUANTITY':
            return{
                ...state,
                basket:state.basket.map(item=>
                    item.id===action.id ? {
                        ...item,
                        quantity:item.quantity+1}
                        :item
                        )
            }
        case 'DECREASE_QUANTITY':
            return{
                ...state,
                basket:state.basket.map(item=>
                    item.id===action.id ? {
                        ...item,
                        quantity:item.quantity-1}
                        :item
                        ).filter(item=>item.quantity>0),
            }
        case 'UPDATE_TOTAL_PRICE':
            return{
                ...state,
                totalPrice:+(action.totalPrice).toFixed(2)
            }
        case 'UPDATE_CART_COUNT':
            return{
                ...state,
                cartCount:action.cartCount
            }
        case 'REDUCE_TOTAL_PRICE':
            return{
                ...state,
                totalPrice:+(action.totalPrice).toFixed(2)
            }
        case 'REDUCE_CART_COUNT':
            return{
                ...state,
                cartCount:action.cartCount
            }
        
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}