import React from 'react';

function CartItem({ item, value }){
   const {id, title, img, price, total, count} = item;
   const {increment, decrement, removeItem} = value;
   return (
      <div className='row my-5 text-center'>
         <div className='col-10 mx-auto col-lg-2'>
            <img 
               src={img}
               style={{ width: '7rem', height: '7rem', objectFit:'contain' }}
               alt='phone-img'
               className='img-fluid'
            />
         </div>
         <div className='col-10 mx-auto col-lg-2 mt-lg-4 mt-2'>
            <span className='d-lg-none'>Product: </span>{title}
         </div>
         <div className='col-10 mx-auto col-lg-2 mt-lg-4 mt-2'>
            <span className='d-lg-none'>Price: </span>
            <span className='font-weight-bolder'>{price}</span>
         </div>
         <div className='col-10 mx-auto col-lg-2 my-2'>
            <div className='d-flex justify-content-center'>
               <span 
                  className='sign'
                  onClick={() => decrement(id)}
               >
                  -
               </span>
               <span className='count'>{count}</span>
               <span 
                  className='sign'
                  onClick={() => increment(id)}
               >
                  +
               </span>
            </div>
         </div>
         <div className='col-10 mx-auto col-lg-2 mt-3'>
            <span className='d-lg-none'>Total: </span>
            <h4 className='font-weight-bold'>$ {total.toFixed(2)}</h4>
         </div>
         <div className='col-10 mx-auto col-lg-2'>
            <span 
               onClick={() => removeItem(id)} 
               className='close'
            >
               x
            </span>
         </div>
      </div>
   )
}


export default CartItem;