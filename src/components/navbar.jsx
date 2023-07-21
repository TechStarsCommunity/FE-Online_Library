import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar__detail-1">
                    <h2>Uploads</h2>
                </div>
                <div className="navbar__input">
                    <img src={"../assets/image_icon.png"} alt="" className="navbar__input-logo" />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="navbar__detail-2">User Dashboard</div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
