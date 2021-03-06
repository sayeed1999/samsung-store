import React, {useState, useEffect} from 'react'
import './index.css'
import samsungIcon from '../../images/samsung.png'
import {Link} from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Navbar() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownToggle = () => setDropdownOpen(prevState => !prevState);

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    })
    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            })
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <div className="nav" style={{ zIndex: "4" }} >
            <div id="nav-img">
                <img src={samsungIcon} style={{ padding: "0 20px 0px 10px" }} alt="samsung-icon" />
            </div>
            
            {dimensions.width>516 ?
                <>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" style={{ flexGrow: '1' }} to="/productpage">Product Page</Link>
                <Link className="nav-link" to="/cartpage"><i className="fas fa-shopping-cart" style={{ fontSize: "40px", padding: "0 20px" }} ></i></Link>
                </> : 
                <>
                <div style={{ flexGrow: "1" }} ></div>
                <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle} >
                    <DropdownToggle caret style={{ margin: "10px 20px" }} color="info" >
                        Menu
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem divider />
                        <DropdownItem className="dropdownItem">
                            <Link className="nav-link" to="/" style={{ }} >Home</Link>
                        </DropdownItem>
                        <DropdownItem className="dropdownItem">
                            <Link className="nav-link" to="/productpage">Product Page</Link>
                        </DropdownItem>
                        <DropdownItem className="dropdownItem">
                            <Link className="nav-link" to="/cartpage"><i className="fas fa-shopping-cart" style={{ fontSize: "40px", padding: "0 20px" }} ></i></Link>        
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                </>
            }
        
        </div>
    )
}

export default Navbar;