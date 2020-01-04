import React from 'react';

class Default extends React.Component{
   render() {
      return (
         <div className='container'>
            <div className='row'>
               <div className='mx-auto text-center my-5 title-2'>
                  <h1 className='display-2'>404 Error</h1>
                  <h1 className='display-4 mb-5'>Page Not Found</h1>
                  <h1>The path <span style={{ color:'crimson' }}>'{this.props.location.pathname}'</span> is non existing</h1>
               </div>
            </div>
         </div>
      )
   }
}

export default Default;