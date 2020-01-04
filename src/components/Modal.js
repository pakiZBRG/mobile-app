import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom'

class Modal extends React.Component {
   render() {
      return (
         <ProductConsumer>
            {value => {
               const {modalOpen, closeModal} = value;
               const {title, price} = value.modalProduct

               if(!modalOpen) {
                  return null;
               } else {
                  return (
                     <div id="modal" className='container-fluid'>
                        <div className='row'>
                           <div id='white-modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center p-4'>
                              <i className="fa fa-check checked"></i>
                              <h4 style={{color:'green',fontWeight:'bold'}}>Phone Added To Cart</h4>
                              <h2 className='font-weight-bold'>{title}</h2>
                              <h3>Price: <span style={{ color: 'crimson', fontWeight: 'bold'}}>${price}</span></h3>
                              <Link to='/'>
                                 <button className='button-1' onClick={() => closeModal()}>Store</button>
                              </Link>
                              <Link to='/cart'>
                                 <button className='button-2' onClick={() => closeModal()}>Cart</button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  )
               }
            }}
         </ProductConsumer>
      )
   }
}

export default Modal;