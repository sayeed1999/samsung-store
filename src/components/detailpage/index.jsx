import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function DetailPage({detailProduct, addToCart}) {
    return (
        <div className="detailPage" style={{ padding: "20% 10%", display: "flex", flexDirection: "row", flexWrap: "wrap", background: "aqua" }}>
            <div className="image" style={{ display:"inline-block" }} >
                <img src={detailProduct.img} style={{ width: "100%" }} />
            </div>
            <div className="body" style={{ display: "flex", flexDirection: "column" }} >
                <div>
                    <h2>{detailProduct.title}</h2>
                    <p style={{ fontWeight:"bold", }} >Company: {detailProduct.company}</p>
                    <p>{detailProduct.info}</p>
                    <p style={{ fontWeight:"bold", }} >Price: ${detailProduct.price}</p>
                </div>
                <div>
                    <button onClick={()=>{addToCart(detailProduct.id)}} className="btn btn-warning">Add To Cart</button>
                    <Link to="/productpage"><button className="btn btn-primary" >Back To Product Page</button></Link>
                </div>
            </div>
        </div>
    )
}

export default DetailPage;
