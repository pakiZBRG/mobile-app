import React from 'react';
import CartItem from './CartItem';

function CartList({value}){
   const {cart} = value
   
   return (
      <div className='container-fluid'>
         {cart.map(item => {
            return (
               <React.Fragment>
                  <CartItem key={item.id} item={item} value={value}/>
                  <hr/>
               </React.Fragment>
            )
         })}
      </div>
   )
}


export default CartList;