import React from "react";
import "../styles/Navbar.css";

import Image from "../assets/image_icon.png";

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar__detail-1">
                    <h2>Uploads</h2>
                </div>
                <div className="navbar__input">
                    <img src={Image} alt="" className="navbar__input-logo" />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="navbar__detail-2">User Dashboard</div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
