import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/index.jsx'
import HomePage from './components/homepage/index.jsx'
import ProductPage from './components/productpage/index.jsx'
import DetailPage from './components/detailpage/index.jsx'
import CartPage from './components/cartpage/index.jsx'
import { storeProducts, detailProduct } from './data'
import React, { Component } from 'react';
import MyModal from './components/modal/index.jsx'

class App extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
    cart: [],
    totalPrice: 0,
    tax: 1,
    modal: false,
  }

  toggleModal = () => this.setState({ modal: !this.state.modal })

  decrement = (id) => {
    const _products = this.state.products
    const _product = _products.find(p => p.id===id)
    if(_product.count===0) return;
    _product.count--
    _product.total -= _product.price
    this.setState({ products: _products, totalPrice: this.state.totalPrice-_product.price })
    //console.log(_product)
  }

  increment = (id) => {
    const _products = this.state.products
    const _product = _products.find(p => p.id===id)
    _product.count++
    _product.total += _product.price
    this.setState({ products: _products, totalPrice: this.state.totalPrice+_product.price })
    //console.log(_product)
  }

  handleChangeDetail = (item) => {
    this.setState({
      detailProduct: item,
    })
  }

  addToCart = (id) => {
    //if someone clicks on addToCart from DetailPage even it is on the cart!
    if(this.state.cart.includes(id)) {
      //this is to inform that...
      this.state.detailProduct.msg = "This product is already in cart! :)"
      this.toggleModal()
      return
    }

    const _products = this.state.products;
    const _product = _products.find( p => p.id===id );
    
    _product.inCart = true;
    _product.count = 1;
    _product.total = _product.price;

    if(!this.state.cart.includes(_product.id)){
      const _cart = [...this.state.cart, _product.id];
      this.setState({ cart: _cart });
    }
    //console.log(this.state.cart) //this comes few seconds lately
    this.setState({
      detailProduct: _product,
      products: _products,
      totalPrice: this.state.totalPrice + _product.price,
    });
    this.toggleModal();
  }

  removeFromCart = (id) => {
    const _products = this.state.products
    const _product = _products.find( p => p.id===id )

    this.setState({ totalPrice: this.state.totalPrice-_product.total })
    _product.inCart = false
    _product.count = 0
    _product.total = 0
    this.setState({ products: _products })

    const _cart = this.state.cart.filter(_id => _id!==id)
    this.setState({ cart: _cart })
    //console.log(this.state.cart)
  }

  render() {

    return (
      <div className="App">
        <Navbar />

        <MyModal
          modal={this.state.modal}
          toggle={this.toggleModal}
          detailProduct={this.state.detailProduct}
        />

        <Switch>
          <Route
            path="/productpage"
            render={(props) => (
              <ProductPage
                products={this.state.products}
                handleChangeDetail={this.handleChangeDetail}
                addToCart={this.addToCart}
              />
            )}
          />
          <Route
            path="/detailpage"
            render={(props) => (
              <DetailPage 
                detailProduct={this.state.detailProduct}
                addToCart={this.addToCart}
              />
            )}
          />
          <Route
            path="/cartpage"
            render={(props) => (
              <CartPage
                cart={this.state.cart}
                products={this.state.products}
                decrement={this.decrement}
                increment={this.increment}
                totalPrice={this.state.totalPrice}
                tax={this.state.tax}
                removeFromCart={this.removeFromCart}
              />
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <HomePage />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
