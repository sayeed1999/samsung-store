import React from 'react'
import './index.css'
import paypal from '../../images/paypal.png'

function finalPrice(originalPrice, taxPercent) {
    //return the final calculated price..
    return originalPrice + (originalPrice*taxPercent/100.0);
}

class CartPage extends React.Component {

  render() {
    return (
        <div className="cartPage" style={{ padding: "15vh 0" }} >
            <div style={{ display: "flex", flexDirection: "column" }} >
                <div className="table-header table" style={{ display: "flex", justifyContent: "center" }} >
                    <h4>PRODUCT</h4>
                    <h4 id="name-of-product">NAME OF PRODUCT</h4>
                    <h4>PRICE</h4>
                    <h4>QUANTITY</h4>
                    <h4>REMOVE</h4>
                    <h4>TOTAL</h4>
                </div>
                {this.props.products.filter(p => this.props.cart.includes(p.id)).map(product => {
                    return <div key={product.id} className="table" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={product.img} alt="phone" />
                        <h5 id="name-of-product">{product.title}</h5>
                        <h5>${product.price}</h5>
                        <h5 className="quantity" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", }} >
                            <button className="button" style={{ padding: "3px 6px" }} onClick={() => this.props.decrement(product.id)} >-</button>
                            <button className="button" style={{ padding: "3px 6px", margin: "0 6px" }} >{product.count}</button>
                            <button className="button" style={{ padding: "3px 6px" }} onClick={() => this.props.increment(product.id)} >+</button>
                        </h5>
                        <h5><i onClick={() => this.props.removeFromCart(product.id)} className="fas fa-trash-alt" style={{ color: "goldenrod" }} ></i></h5>
                        <h5>${product.total}</h5>
                    </div>
                })}
            </div>
            <div id="calculations" style={{ padding: "4vh 10vw", display: "flex", flexDirection: "column", width: "100%", alignItems: "flex-end" }} >
                <h4 style={{ fontWeight: "400" }} >SubTotal: ${this.props.totalPrice}</h4>
                <h4 style={{ fontWeight: "400" }} >Tax: {this.props.tax}%</h4>
                <h4 style={{ paddingTop: "6px" }} >Total: ${finalPrice(this.props.totalPrice, this.props.tax)}</h4>
                <img src={paypal} alt="paypal" style={{ width: "120px" }} />
            </div>
        </div>
    )
  }
}

export default CartPage;
