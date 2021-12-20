import { ArrowDropDown } from "@mui/icons-material";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import heart from '../../assets/nav/heart.svg';
import userImg from '../../assets/nav/user.png';
import useModal from "../../hooks/useModal";
import CartWidget from "../CartWidget/CartWidget";
import Modal from "../Modal/Modal";
import './NavBar.scss'

export default function NavBar() {

    const [isOpenModalNav, openModalNav, closeModalNav] = useModal(false);

    return(
        <nav className="container-nav">
            <div className="container-menu">
                <h3><Link to='/'>mdec.</Link></h3>
                <ul>
                    <li >
                        {/* <Link to='/products'>Products</Link> */}
                        <div className="products" onClick={() => {openModalNav()}}>
                            <p>Products</p>
                            <ArrowDropDown />
                        </div>
                        <Modal isOpen={isOpenModalNav} closeModal={closeModalNav}>
                            <ul className="modal-active">
                                <li onClick={() => {closeModalNav()}}><Link to={'/category/1'}>Chairs</Link></li>
                                <li onClick={() => {closeModalNav()}}><Link to={'/category/2'}>Bed</Link></li>
                                <li onClick={() => {closeModalNav()}}><Link to={'/category/3'}>Decoration</Link></li>
                            </ul>
                        </Modal>
                    </li>
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