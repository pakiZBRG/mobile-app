import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

class Details extends React.Component{
   render() {
      return (
         <ProductConsumer>
            {value => {
               const {id, title, img, company, inCart, price, announced, OS, displaySize, CPU, backCamera, frontCamera, battery} = value.detailProduct
               return (
                  <div className='container-a mx-auto'>
                     <div className='row'>
                        <div className='col-10 mx-auto text-center p-5'>
                           <h1 className='title'>{title}</h1>
                        </div>
                     </div>
                     <div className='row'>
                        <div className='col-10 mx-auto col-md-6 my-3'>
                           <img src={img} alt='phone-img' className='img-fluid'/>
                        </div>
                        <div className='col-10 mx-auto col-md-6 my-4'>
                           <h1>Model: {title}</h1><hr/>
                           <h3 className='text-uppercase text-muted font-weight-bold'>
                              made by: {company}
                           </h3>
                           <h3>Price: 
                              <span style={{color:'crimson', fontWeight:'bold'}}>
                                 ${price}
                              </span>
                           </h3><hr/>
                           <h4 className='text-title mb-4'>Phone specifications: </h4> 
                           <p><span className='title-2'>Announced: <span style={{background: '#f9d342', color: '#333', padding: '2px'}}>{announced}</span></span></p>
                           <p><span className='title-2'>Display size: <span style={{background: '#f9d342', color: '#333', padding: '2px'}}>{displaySize}</span></span></p>
                           <p><span className='title-2'>OS: <span style={{background: '#f9d342', color: '#333', padding: '2px'}}>{OS}</span></span></p>
                           <p><span className='title-2'>CPU: <span style={{background: '#f9d342', color: '#333', padding: '2px'}}>{CPU}</span></span></p>
                           <p><span className='title-2'>Back camera: <span style={{background: '#f9d342', color: '#333', padding: '2px'}}>{backCamera}</span></span></p>
                           <p><span className='title-2'>Front camera: <span style={{background: '#f9d342', color: '#333', padding: '2px'}}>{frontCamera}</span></span></p>
                           <p><span className='title-2'>Battery: <span style={{background: '#f9d342', color: '#333', padding: '2px'}}>{battery}</span></span></p>
                           <Link to='/'>
                              <button className='button-1'>Store</button>
                           </Link>
                           <button 
                              disabled={inCart ? true : false}
                              className='button-2'
                              onClick={() => {value.addToCart(id);}}
                           >
                              {inCart ? 'In Cart' : 'Add To Cart'}
                           </button>
                        </div>
                     </div>
                  </div>
               )
            }}
         </ProductConsumer>
      )
   }
}

export default Details;