import React from "react";
import "../styles/header.css";
import { BsList } from "react-icons/bs";
import logo from "/booksLab_logo.png";

const Header = () => {
    return (
        <React.Fragment>
            <header className="flex flex-row items-center justify-between px-8 md:px-11 py-4 bg-white w-full z-[999]">
                <div className="w-[6.5rem] md:w-[9.5rem] h-auto ">
                    <img src={logo} alt="" className="max-w-[100%] w-[8rem] md:w-[9rem]" />
                </div>
                <div className="flex flex-row items-center justify-between md:w-1/2 header-links-parent">
                    <ul className="md:flex hidden flex-row gap-2.5">
                        <li>
                            <a
                                href="#"
                                className="active text-sm  lg:text-[17px] ease-in duration-300 hover:scale-[1.1]"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm lg:text-[17px]  ease-in duration-300 hover:scale-[1.1]"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm lg:text-[17px]  ease-in duration-300 hover:scale-[1.1]"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    <div className="inline-flex flex-row gap-2.5 items-center">
                        <button className="get-started-btn hidden md:block py-1.5 px-2.5 rounded-[3.125rem] text-white cursor-pointer w-[4.25rem] md:w-[6.25rem] md:h-full  border-none ease-in duration-300 hover:scale-[1.1]">
                            Get Started
                        </button>
                        <button className=" border-[#10b2f3] border-solid border py-1.5 px-2.5 rounded-[3.125rem]  outline-none cursor-pointer w-[4.25rem] md:w-[6.25rem] md:h-full  text-[#10b2f3] bg-white ease-in duration-300 hover:scale-[1.1]">
                            Login
                        </button>

                        <BsList className="menu-icon w-7 h-7 md:hidden" />
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
