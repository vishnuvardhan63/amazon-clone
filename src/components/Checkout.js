import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
function Checkout(){
    const [{basket},dispatch]=useStateValue()
    return(
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://m.media-amazon.com/images/G/31/img23/Fashion/BAU/Bank/March/V1/apay._CB594538981_.png' />
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {
                        basket.map(item=>(
                            <CheckoutProduct quantity={item.quantity}
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))
                    }
                    
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
                
            </div>

        </div>
    )
}
export default Checkout