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

                    <div className="flex gap-2.5">
                        <button className=" hover:bg-sky-950 bg-gradient-to-r from-blue-400 to-teal-400 text-white px-5 py-2 rounded-full  ">Get Started </button> 
                        <button className="login-btn">Login</button>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
