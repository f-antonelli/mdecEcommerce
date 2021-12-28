import { ArrowDropDown, Close, Menu } from "@mui/icons-material";

import { Link } from "react-router-dom";
import heart from '../../assets/nav/heart.svg';
import userImg from '../../assets/nav/user.png';
import useModal from "../../hooks/useModal";
import CartWidget from "../CartWidget/CartWidget";
import Modal from "../Modal/Modal";
import './NavBar.scss'

export default function NavBar() {

    const [isOpenModalNav, openModalNav, closeModalNav] = useModal(false);

    const displayNav = document.getElementById('hi');
    const openNavMobile = () => {

        displayNav.classList.toggle('active');
    }

    return(
        <nav className="container-nav">
            <div className="container-menu">
                <h3><Link to='/'>mdec.</Link></h3>
                <ul>
                    <li >
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

            <div className="container-menu-mobile">
                <h3><Link to='/'>mdec.</Link></h3>
                <Menu className="hamburger" onClick={() => {openModalNav()}} />
                <div className={`menu-mobile ${isOpenModalNav && 'active'}`}>
                    <Close className="btn-close" onClick={() => {closeModalNav()}}/>
                    <ul>
                        <li >
                            <div className="products" onClick={openNavMobile}>
                                <p>Products</p>
                                <ArrowDropDown />
                            </div>
                                <ul className="modal-navmobile" id='hi'>
                                    <li onClick={() => {closeModalNav()}}><Link to={'/category/1'}>Chairs</Link></li>
                                    <li onClick={() => {closeModalNav()}}><Link to={'/category/2'}>Bed</Link></li>
                                    <li onClick={() => {closeModalNav()}}><Link to={'/category/3'}>Decoration</Link></li>
                                </ul>
                        </li>
                        <li onClick={() => {closeModalNav()}}><Link to='/rooms'>Rooms</Link></li>
                        <li onClick={() => {closeModalNav()}}><Link to='/inspirations'>Inspirations</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}