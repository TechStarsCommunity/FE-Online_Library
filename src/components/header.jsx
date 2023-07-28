import React from "react";
import "../styles/header.css";
// import Button from "./button/button.jsx";
import logo from "../assets/booksLab_logo.png";

const Header = () => {
    return (
        <React.Fragment>
            <header className="flex flex-row items-center justify-between px-5 py-2.5 bg-white w-full z-[999]">
                <div className="header-logo-parent ">
                    <img src={"../assets/booksLab_logo"} alt="" className="header-logo" />
                    <img src={logo} alt="" className="max-w-[100%] w-[150px]" />
                </div>
                <div className=" flex flex-row items-center justify-between w-1/2 header-links-parent">
                    <ul className="flex flex-row gap-2.5">
                        <li>
                            <a href="#" className="active text-sm  lg:text-[17px] ease-in duration-300 hover:scale-[1.1]">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm lg:text-[17px]  ease-in duration-300 hover:scale-[1.1]">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm lg:text-[17px]  ease-in duration-300 hover:scale-[1.1]">Contact Us</a>
                        </li>
                    </ul>
                          
                    <div className="inline-flex flex-row gap-2.5">
                        {/* <Button style={{marginTop:"5rem"}}>Get Started</Button> */}  
                        {/*  creating a custom button */}
                        <button className="get-started-btn py-1.5 px-2.5 rounded-[3.125rem] text-white cursor-pointer w-[6.25rem] h-full border-none ease-in duration-300 hover:scale-[1.1]">Get Started</button>
                        <button className=" border-[#10b2f3] border-solid border py-1.5 px-2.5 rounded-[3.125rem]  outline-none cursor-pointer w-[4.25rem] md:w-[6.25rem] md:h-full  text-[#10b2f3] bg-white ease-in duration-300 hover:scale-[1.1]">
                            Login
                        </button>
                         {/* for mobile: get-started will not show, login and menu icon will show */}
                        <button className="md:hidden">MENU</button>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
