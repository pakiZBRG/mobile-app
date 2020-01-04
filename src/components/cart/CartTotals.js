import React from 'react';
import {Link} from 'react-router-dom';
import PayPal from './PayPalButton'

function  CartTotals({ value }) {
   const {clearCart, cartTotal} = value;
   return (
      <React.Fragment>
         <div className='container'>
            <div className='row'>
               <div className='col-10 col-sm-8 text-right mt-2 ml-sm-5 ml-md-auto'>
                  <Link to='/'>
                     <button 
                        className='btn btn-outline-danger text-uppercase mb-3 px-4'
                        onClick={() => clearCart()}   
                     >
                        Clear Cart
                     </button>
                  </Link>
                  <h5>
                     <span className='text-title'>
                        Total: <span style={{color:'crimson'}}>${cartTotal.toFixed(2)}</span>
                     </span>
                  </h5>
                  <PayPal/>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}


export default CartTotals;