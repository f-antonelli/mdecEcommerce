import React from "react"
import { Link } from "react-router-dom";
import heart from '../../assets/nav/heart.svg';
import userImg from '../../assets/nav/user.png';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.scss'

export default function NavBar() {

    return(
        <nav className="container-nav">
            <div className="container-menu">
                <h3><Link to='/'>mdec.</Link></h3>
                <ul>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/rooms'>Rooms</Link></li>
                    <li><Link to='/inspirations'>Inspirations</Link></li>
                </ul>
            </div>

            <div className="container-navbuttons">
                <img src={heart} alt="heart" />
                <CartWidget />
                <img src={userImg} alt="user" />
            </div>
        </nav>
    )
}