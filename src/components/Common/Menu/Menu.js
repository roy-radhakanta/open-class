import React, {useState} from 'react';
import LoginModal from '../../LoginModal/LoginModal';


function Menu(){

    const [showMenu, setShowMenu] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    function openMobileMenu(){
        setShowMenu(true);
        document.body.classList.add('disable');
    }

    function closeMobileMenu(){
        setShowMenu(false);
        document.body.classList.remove('disable');
    }

    function showLoginForm(){
        setShowLoginModal(true);
    }

    function closeLogin(){
        setShowLoginModal(false);
    }

    return (
        <>
        <LoginModal active={showLoginModal} inactive={closeLogin}/>
        <div className={`oc-backdrop-menu ${showMenu ? 'active' : ''}`} onClick={closeMobileMenu}></div>
            <div className="oc-menu">
    <div className="oc-menu__container">
        <div className="oc-menu__row flex a-i-c j-c-s-b">
            <div className="oc-menu__logo">
                <a >
                    <img src="./images/logo/logo.png" alt=""/>
                </a>
            </div>
            <div className="oc-menu__links">
                <ul className={`flex a-i-c oc-menu__links__lists ${showMenu ? 'active' : ''}`}>
                    <li className="mobile-menu-close-btn">
                        <button className="action-button close" onClick={closeMobileMenu}>
                            <img src="./images/icons/close-outline.svg" alt=""/>
                        </button>
                    </li>
                    <li className="<?= isset($isHomeActive) ? 'active' : ''?>">
                        <a className="menu-link active">
                            Home
                        </a>
                    </li>
                    <li className="">
                        <a href="" className="menu-link">
                            About Us
                        </a>
                    </li>
                    <li className="parent-menu ">
                        <a className="menu-link">
                            Infrastrcture
                        </a>
                        <div className="child-menu__container">
                        <ul className="child-menu">
                            <li className="">
                                <a href="#">
                                    General
                                </a>
                            </li>
                            <li className="">
                                <a href="#">
                                    Medical Care
                                </a>
                            </li>
                            <li className="">
                                <a href="#">
                                    Safety
                                </a>
                            </li>
                            <li className="">
                                <a href="#">
                                    Book Counter
                                </a>
                            </li>
                            <li className="">
                                <a href="#">
                                    Libraries
                                </a>
                            </li>
                            <li className="">
                                <a href="#">
                                    Auditorium
                                </a>
                            </li>
                            <li className="">
                                <a href="#">
                                    Playground
                                </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="">
                        <a href="#" className="menu-link">
                            Admission
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="menu-link">
                            Curriculars
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="menu-link">
                            News & Events
                        </a>
                    </li>
                    <li>
                        <a className="button outline-secondary login-button" onClick={showLoginForm}>
                            Login
                        </a>
                    </li>
                    <li className="<?=isset($isRegActive) ? 'active' : ''?>">
                        <a href="" className="reg-act button fill-secondary">
                            Registration
                        </a>
                    </li>
                </ul>

                <button className="mobile-menu" onClick={openMobileMenu}>
                    <img src="./images/icons/menu-outline.svg" alt=""/>
                </button>
            </div>
        </div>
    </div>
</div>
        </>
    );
}

export default Menu;