import React from "react";

// change the name of the function to match the name of the file
const Header = () => {
    return (
        <React.Fragment>
            <header>
                <div className="header-logo-parent"> <img src={"../assets/booksLab_logo"} alt="" className="header-logo" /></div>
                <div className="header-links-parent">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <div>
                    <button className="">Get Started</button>
                    <button className="">Login</button>
                    </div>
                </div>
             </header>
        </React.Fragment>
    );
};

// Also change the name of the function here
export default Header;
