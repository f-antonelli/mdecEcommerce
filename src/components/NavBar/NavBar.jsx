import React from "react"
import './NavBar.scss'
import heart from '../../assets/nav/heart.svg';

import userImg from '../../assets/nav/user.png';
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {

    return(
        <nav className="container-nav">
            <div className="container-menu">
                <h3>mdec.</h3>
                <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Rooms</a></li>
                    <li><a href="#">Inspirations</a></li>
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