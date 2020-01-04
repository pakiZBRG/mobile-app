import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context'; 
import PropTypes from 'prop-types';

class Product extends React.Component{
   render() {
      const {id, title, img, price, inCart} = this.props.product
      return (
         <div className='col-9 mx-auto col-md-6 col-lg-4 m-4'>
            <div className='card'>
               <ProductConsumer>
                  {value => {
                     return (
                        <div 
                           className='img-container p-2' 
                           onClick={() => value.handleDetail(id)}
                        >
                           <Link to={`/${title}`}>
                              <img src={img} alt='product' className='card-img-top image'/>
                           </Link>
                           <button 
                              className='add-to-cart' 
                              disabled={inCart ? true:false}
                              onClick={() => {
                                 value.addToCart(id);
                                 value.openModal(id);
                              }}
                           >
                              {inCart ? <p className='mb-0 disabled font-weight-bold'>In Cart</p> : <p className='mb-0'>Add To Cart</p>}
                           </button>
                        </div>
                     )}}
               </ProductConsumer>
               <div className='card-footer'>
                  <h3 className='text-muted text-title'>{title}</h3>
                  <h3 className='float-right font-weight-bold mb-0'>${price}</h3>
               </div>
            </div>
         </div>
      )
   }
}

Product.propTypes = {
   product:PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      img: PropTypes.string,
      price: PropTypes.number,
      inCart: PropTypes.bool
   }).isRequired
}

export default Product;