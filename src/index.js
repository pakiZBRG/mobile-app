import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductProvider} from './context'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <ProductProvider>
      <App />
   </ProductProvider>
, document.getElementById('root'));

serviceWorker.unregister();
