import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function Product({ item, handleChangeDetail, addToCart }) {
    return (
        <div className="product" style={{ width: "250px", height: "auto", background: "#efefef", boxShadow: "4px 4px 8px #424242", margin: "40px", display: "flex", flexDirection: "column", }} >
            <img src={item.img} alt="cellphone" style={{ width: "100%", background:"#dddddd" }} />
            <div style={{ display: "flex", padding: "8px 8px 0px 8px" }}>
                <h4 style={{ fontSize: "16px", flexGrow: '1' }} >{item.title}</h4>
                <h6 style={{ color: "goldenrod" }} >'$'{item.price}</h6>
            </div>
            <div className="detail-cart" style={{ display: "flex" }} >
                <Link to='/detailpage' onClick={()=> handleChangeDetail(item) } className="detail" style={{ flexGrow: "1", textAlign: "center", alignSelf:"center", fontSize: "14px" }} >Details <i className="fa fa-bars" style={{ fontSize: "12px" }} ></i></Link>
                {item.inCart
                ? <button className="btn btn-primary btn-md" style={{ padding: "2px", margin: "2px", background: "rgba(255, 178, 106, 0.6)", color: "dodgerblue", fontWeight: "500" }} > Added To Cart </button>
                : <button onClick={()=>{addToCart(item.id)}} className="btn btn-sm btn-primary" style={{ paddingBottom: "0px" }} >
                    <i className="fas fa-shopping-cart" style={{ padding: "3px 6px", fontSize: "14px" }} ></i>
                    <h6 style={{ fontSize: "8px", marginBottom: "4px" }} >Add To Cart</h6>
                  </button>
                }
            </div>
        </div>
    )
}

function ProductPage({ products, handleChangeDetail, addToCart }) {
    
    return <>
        <div className="productPage" style={{ width: "100%", padding: "16vh 0", display: "flex", flexDirection: "column", alignItems: "center", background: "dodgerblue" }}>
            <h1 style={{ textTransform: "uppercase", paddingBottom: "8px" }}>Let's See Which One You Pick!</h1>
            <div className="phones" style={{ display: "flex", flexWrap: "wrap" }} >
                {products.map(product => {
                    return <Product key={product.id} item={product} handleChangeDetail={handleChangeDetail} addToCart={addToCart} />
                })}
            </div>
        </div>
    </>
}

export default ProductPage;
