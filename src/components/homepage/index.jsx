import React from 'react'
import './index.css'
import samsung1 from '../../images/gallery/samsung1.jpg'
import samsung2 from '../../images/gallery/samsung2.jpg'
import samsung3 from '../../images/gallery/samsung3.jpg'

const arr = [ samsung1, samsung2, samsung3 ]

class HomePage extends React.Component {

    state = {
        index: 0,
    }

    componentDidMount() {
        setInterval( () => {
            this.state.index===arr.length-1
            ? this.setState({ index: 0 })
            : this.setState({ index: this.state.index+1 })
        }, 2000)
    }
    render() {
        return (
            <div className="homePage" style={{ padding: "15vh 0" }} >
                <h1 style={{ paddingBottom: "8px" }} >Welcome To Samsung Store</h1>
                <h2 style={{ color: "#fff", paddingBottom: "4px" }} >Grab Your Best Choice!</h2>
                <img src={arr[this.state.index]} alt="samsung-phone" style={{ width: "60vh",  boxShadow: "8px 10px 18px black" }} />
                <div id="developers-contact" style={{ position: "absolute", bottom: "3px" }}>
                    <p style={{ margin: "2px 0", fontStyle: "italic", fontWeight: "bold" }} >Developer's Contact</p>
                    <a style={{ marginBottom: "20px", fontStyle: "italic", fontWeight: "bold", color: "#efefef" }} href="https://md-sayeed-rahman-portfolio.netlify.app" target="_blank" >&copy;Md. Sayeed Rahman</a>
                </div>
            </div>
        )
    }
}

export default HomePage;
