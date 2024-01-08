import { useState } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import "../styles/header.css";
import logo from "/booksLab_logo.png";
const Header = () => {
    const [mobileLinksVisible, setMobileLinksVisible] = useState(false);
    const toggleMobileLinks = () => {
        setMobileLinksVisible(!mobileLinksVisible);
    };

    return (
        <header className="flex flex-row items-center justify-between gap-2.5 px-8 md:px-11 py-4 bg-white w-full z-[999]">
            <div>
                <img src={logo} alt="" className="max-w-[100%]  h-auto w-40" />
            </div>
            <div className="flex flex-row items-center justify-between  header-links-parent gap-4 md:w-[80%] w-auto">
                <ul className="md:flex hidden flex-row gap-2.5 my-0 mx-auto">
                    <li>
                        <a
                            href="/"
                            className="active text-sm  lg:text-[17px] ease-in duration-300 hover:scale-[1.1]"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="text-sm lg:text-[17px]  ease-in duration-300 hover:scale-[1.1]"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className="text-sm lg:text-[17px]  ease-in duration-300 hover:scale-[1.1]"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
                <div className="inline-flex flex-row gap-2.5 items-center">
                    <Link to="/signup">
                        <button className="get-started-btn hidden md:block py-1.5 px-2.5 rounded-[3.125rem] text-white cursor-pointer w-[4.25rem] md:w-[6.25rem] md:h-full  border-none ease-in duration-300 hover:scale-[1.1]">
                            Get Started
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className=" border-[#10b2f3] border-solid border py-1.5 px-2.5 rounded-[3.125rem]  outline-none cursor-pointer w-[4.25rem] md:w-[6.25rem] md:h-full  text-[#10b2f3] bg-white ease-in duration-300 hover:scale-[1.1]">
                            Login
                        </button>
                    </Link>
                    {/* Menu icon and links */}
                    <BsList
                        className="menu-icon w-7 h-7 md:hidden cursor-pointer hover:border-[#10b2f3] hover:border-solid hover:border rounded-[0.2rem]"
                        onClick={toggleMobileLinks}
                    />

                    {mobileLinksVisible && (
                        <nav className="mobile-links-parent ">
                            <a href="/" className="active mobile-links">
                                Home
                            </a>
                            <a href="/about" className="mobile-links">
                                About
                            </a>
                            <a href="/contact" className="mobile-links">
                                Contact Us
                            </a>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
