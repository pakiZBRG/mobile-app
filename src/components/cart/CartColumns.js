import React from 'react';

class CartColumns extends React.Component {
   render() {
      return (
         <div className='container-fluid text-center d-none d-lg-block'>
            <div className='row'>
               <div className='col-10 mx-auto col-lg-2'>
                  <div className='text-uppercase font-weight-bold'>Products</div>
               </div>
               <div className='col-10 mx-auto col-lg-2'>
                  <div className='text-uppercase font-weight-bold'>Title</div>
               </div>
               <div className='col-10 mx-auto col-lg-2'>
                  <div className='text-uppercase font-weight-bold'>price</div>
               </div>
               <div className='col-10 mx-auto col-lg-2'>
                  <div className='text-uppercase font-weight-bold'>quantity</div>
               </div>
               <div className='col-10 mx-auto col-lg-2'>
                  <div className='text-uppercase font-weight-bold'>total</div>
               </div>
               <div className='col-10 mx-auto col-lg-2'>
                  <span></span>
               </div>
            </div><hr/>
         </div>
      )
   }
}
export default CartColumns