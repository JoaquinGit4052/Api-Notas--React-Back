import React from 'react';

const Header = () => {
    return    <header>
                <nav>
                    <div className="brand-wrapper">
                        <div className="burger">
                            <img src="images/burger.svg" alt="" />
                        </div>
                        <div className="logo">
                            <img src="images/logo.svg" alt=""  />
                        </div>
                    </div>
                    <div className="user-wrapper">
                        <div className="avatar"></div>
                        <a href="#">Cerrar sesión</a>
                    </div>
                </nav>
            </header>
}

export default Header