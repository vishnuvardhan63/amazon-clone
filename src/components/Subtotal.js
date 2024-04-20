import React, { useContext, useReducer } from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { stateContext } from '../App'
import { getBasketTotal } from './Reducer'
import { useStateValue } from './StateProvider'

function Subtotal(){
   
    const [{basket,cartCount,totalPrice},dispatch]=useStateValue()
    return(
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value)=>(
                    <>
                    <p>
                        Subtotal ({cartCount} items):<strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/> This order contains gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={totalPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'  $'}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}
export default Subtotal