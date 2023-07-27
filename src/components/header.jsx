import React from "react";
import "../styles/header.css";
import Button from "./button/button.jsx";
import logo from "../assets/booksLab_logo.png";

const Header = () => {
    return (
        <React.Fragment>
            <header className="flex flex-row items-center justify-between px-5 py-2.5 bg-white w-full z-[999]">
                <div className="header-logo-parent ">
                    <img src={"../assets/booksLab_logo"} alt="" className="header-logo" />
                    <img src={logo} alt="" className="max-w-[150px]" />
                </div>
                <div className=" flex flex-row items-center justify-between w-1/2 header-links-parent">
                    <ul className="flex flex-row gap-2.5">
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
                          
                    <div className="inline-flex flex-row gap-2.5">
                        <Button style={{marginTop:"5rem"}}>Get Started</Button>
                        <button className=" border-[#10b2f3] border-solid border py-2 px-5 rounded-[50px] outline-none cursor-pointer text-[#10b2f3] bg-white ease-in duration-300 hover:scale-[1.1]">
                            Login
                        </button>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
