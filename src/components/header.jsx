import React from "react";
import "../styles/header.css";
import Button from "./button/button.jsx";
import logo from "../assets/booksLab_logo.png";

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <div className="header-logo-parent">
                    <img src={"../assets/booksLab_logo"} alt="" className="header-logo" />
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
                        <Button className="get-started-btn">Get Started</Button>

                    </div>
                </div>
                <button className="">Get Started</button>
                <button className="">Login</button>
            </header>
        </React.Fragment>
    );
};

export default Header;
