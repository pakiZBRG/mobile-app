import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context'; 

class Filter extends React.Component {
   render(){
      return(
         <ProductConsumer>
            {(value) => {              
               return value.products.map(v => {
                  return (
                     <div key={v.id}>
                        <Link to={`/${v.title}`} onClick={() => value.handleDetail(v.id)}>
                           <span className='ab'>{v.title}</span>
                        </Link>
                     </div>
                  )
               })
            }}
         </ProductConsumer>
      )
   }
}

export default Filter;