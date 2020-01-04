import React from 'react';
import {Link} from 'react-router-dom'

class EmptyCart extends React.Component{
   render() {
      return (
         <div className='container mt-5'>
            <div className='row'>
               <div className='col-10 mx-auto text-center'>
                  <h1 className='products'>Your cart is Currently Empty</h1>
                  <h1>Go back to <Link to='/'>Store</Link></h1>
               </div>
            </div>
         </div>
      )
   }
}

export default EmptyCart;