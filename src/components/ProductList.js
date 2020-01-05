import React from 'react';
import Product from './Product';
import Filter from './Filter';
import Footer from './Footer';
import {ProductConsumer} from '../context'

class ProductList extends React.Component{
   state = {
      products: []
   }
   render() {
      return (
         <React.Fragment>
            <div className='py-5'>
               <h1 className='products text-center pb-5'>Products</h1>
               <div className="menu-wrap">
               <input type="checkbox" className="toggler"/>
               <div className="hamburger">
                  <div></div>
               </div>
               <div className="menu">
                  <div>
                     <div>
                        <Filter/>
                     </div>
                  </div>
               </div>
            </div>
               <div className='container'>
                  <div className='row'>
                     <ProductConsumer>
                        {value => {
                           return value.products.map(product => {
                              return (
                                 <Product 
                                    product={product} 
                                    key={product.id}
                                 />
                              )
                           })
                        }}
                     </ProductConsumer>
                  </div>
               </div>
            </div>
            <Footer />
         </React.Fragment>
      )
   }
}

export default ProductList;