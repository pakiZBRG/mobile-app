import React from 'react';
import {storeProducts, detailProduct} from './data';

class ProductProvider extends React.Component {
   state = {
      products: [],
      detailProduct: [],
      cart: [],
      modalOpen: false,
      modalProduct: detailProduct,
      cartTotal: 50
   }

   setProducts = () =>{
      let newProducts = [];
      storeProducts.forEach(item => {
         const singleItem = {...item};
         newProducts = [...newProducts, singleItem]
      })
      this.setState({ products: newProducts });
   }

   componentDidMount() {
      this.setProducts();
   }
   
   getItem = id => {
      const product = this.state.products.find(item => item.id === id);
      return product;
   }

   handleDetail = id => {
      const product = this.getItem(id);
      this.setState({ detailProduct: product })
   }

   addToCart = id => {
      let newProducts = [...this.state.products];
      const index = newProducts.indexOf(this.getItem(id));
      const product = newProducts[index];
      product.inCart = true;
      product.count = 1;
      product.total = product.price;
      this.setState({ 
         products: newProducts, 
         cart: [...this.state.cart, product] 
      }, () => {
         this.addTotal();
      })
   }

   openModal = id => {
      const product = this.getItem(id);
      this.setState({ 
         modalProduct: product,
         modalOpen: true
      })
   }

   closeModal = () => {
      this.setState({ modalOpen: false })
   }

   increment = id => {
      let cart = [...this.state.cart];
      const selectedProduct = cart.find(item => item.id === id);
      const index = cart.indexOf(selectedProduct);
      const product = cart[index];
      product.count += 1;
      product.total = product.count * product.price;
      this.setState({ cart: [...cart] }, 
         () => {
            this.addTotal()
         })
   }

   decrement = id => {
      let cart = [...this.state.cart];
      const selectedProduct = cart.find(item => item.id === id);
      const index = cart.indexOf(selectedProduct);
      const product = cart[index];
      if(product.count > 1) {
         product.count -= 1;
         product.total = product.count * product.price;
      }
      this.setState({ cart: [...cart] }, 
         () => {
            this.addTotal()
         })
   }

   removeItem = id => {
      let newProducts = [...this.state.products];
      let tempCart = [...this.state.cart];
      tempCart = tempCart.filter(item => item.id !== id);
      const index = newProducts.indexOf(this.getItem(id));
      let removedProduct = newProducts[index];
      removedProduct.inCart = false;
      removedProduct.count = 0;
      removedProduct.total = 0;
      this.setState({ 
         cart: [...tempCart],
         products: [...newProducts]
      }, () => this.addTotal())
   }

   clearCart = () => {
      this.setState({ cart: [] }, 
      () => {
         this.setProducts();
         this.addTotal();
      })
   }

   addTotal = () => {
      let subTotal = 0;
      this.state.cart.map(item => (subTotal += item.total));
      this.setState({ cartTotal: subTotal })
   }

   render() {
      return (
         <ProductContext.Provider
            value = {{
               ...this.state,
               addToCart: this.addToCart,
               handleDetail: this.handleDetail,
               openModal: this.openModal,
               closeModal: this.closeModal,
               increment: this.increment,
               decrement: this.decrement,
               removeItem: this.removeItem,
               clearCart: this.clearCart,
               addTotal: this.addTotal
            }}
         >
            {this.props.children}
         </ProductContext.Provider>
      )
   }
}

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer, ProductProvider}