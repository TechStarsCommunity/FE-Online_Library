import React from "react";
import "../styles/header.css";
import "./button/button.jsx"

// change the name of the function to match the name of the file
const Header = () => {
    return (
        <React.Fragment>
            <header>
            <div className="header-logo-parent">
                <img src={"../assets/booksLab_logo"} alt="" className="header-logo" />
                </div>
                <div className="header-links-parent">
                    <ul>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <button className="">Get Started</button>
                <button className="">Login</button>
                </header>
        </React.Fragment>
    );
};

// Also change the name of the function here
export default Header;
