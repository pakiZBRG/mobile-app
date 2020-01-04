import React from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import {ProductConsumer} from '../../context';

class Cart extends React.Component{
   render() {
      return (
         <ProductConsumer>
            {value => {
               const {cart} = value;
               if(cart.length > 0) {
                  return (
                     <React.Fragment>
                        <h1 className='products text-center p-5'>Your Cart</h1>
                        <CartColumns />
                        <CartList value={value}/>
                        <CartTotals value={value}/>
                     </React.Fragment>
                  )
               } else {
                  return <EmptyCart/>
               }
            }}
         </ProductConsumer>
      )
   }
}

export default Cart;