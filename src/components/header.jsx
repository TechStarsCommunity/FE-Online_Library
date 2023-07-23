import React from "react";
import "../styles/header.css";
import Button from "./button/button.jsx";
import logo from "../assets/booksLab_logo.png";

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <div className="header-logo-parent">
                    <img src={logo} alt="" className="header-logo" />
                </div>
                <div className="header-links-parent">
                    <ul>
                        <li>
                            <a href="#" className="active">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>

                    <div className="btn-parent">
                        <Button>Get Started</Button> 
                        <button className="login-btn">Login</button>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
