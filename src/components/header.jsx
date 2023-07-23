import React from "react";
import "../styles/header.css"
import Button from "./button/button.jsx"
import logo from "../assets/booksLab_logo.png"

// change the name of the function to match the name of the file
const Header = () => {
    return (
        <React.Fragment>
            <header>
            <div className="header-logo-parent">
                <img src={logo} alt="" className="header-logo" />
                </div>
                <div className="header-links-parent">
                    <ul>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <Button/>
                <button className="">Login</button>
                </header>
        </React.Fragment>
    );
};

// Also change the name of the function here
export default Header;
