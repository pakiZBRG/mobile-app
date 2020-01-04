import React from 'react';
import {Link} from'react-router-dom';
import {ProductConsumer} from '../context';

class Navbar extends React.Component{
   render() {
      return (
         <ProductConsumer>
            {(value) => {
               const {cart} = value;
               return (
                  <nav className='navbar navbar-expand-sm p-3 bg-nav'>
                  <Link to='/'>
                     <h1 className='mt-1 name'>Mobile Store</h1>
                  </Link>
                  <Link to='/cart' className='ml-auto'>
                     <button className='cart-btn'>
                        <i className='fa fa-shopping-cart'></i> 
                        {cart.length === 0 ? ' Cart' : <span> Cart<span className='a'>{cart.length}</span></span>}
                     </button> 
                  </Link>
               </nav>
               )
            }}
         </ProductConsumer>
      )
   }
}

export default Navbar;