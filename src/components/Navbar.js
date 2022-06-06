import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="navbar container">
            <Link to="/" className="logotype">
                <i className="fa-solid fa-shield-dog logo-mobile"></i>
                <p className="typography">Adoptuj zwierzaka</p>
            </Link>

            <ul
                onClick={()=>setIsMobile(false)}
                className={isMobile ? "navigation-list-mobile" : "navigation-list"}
            >
                <li className="navigation-item">
                    <Link to="/opieka">
                        Opieka
                    </Link>
                </li>
                <span className={isMobile ? "navigation-span-mobile" : "navigation-span"}/>
                <li className="navigation-item">
                    <Link to="/znajdz-dom">
                        Znajdź dom
                    </Link>
                </li>
                <span className={isMobile ? "navigation-span-mobile" : "navigation-span"}></span>
                <li className="navigation-item">
                    <Link to="/adoptuj">
                        Adoptuj
                    </Link>
                </li>
                <span className={isMobile ? "navigation-span-mobile" : "navigation-span"}></span>
            </ul>
            <button
                onClick={()=>setIsMobile(!isMobile)}
                className="menu-mobile">
                {isMobile ? (<i className="fa-solid fa-xmark"/>)
                : (<i className="fas fa-bars"/>)}
            </button>

        </nav>
    );
};

export default Navbar;