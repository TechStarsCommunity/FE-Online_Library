import { IoIosClose, IoIosMenu } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { Tabs } from "../data/leftSideBarData";
import { useState } from "react";

import booksLabLogo from "/booksLab_logo.png";

const LeftSidebar = () => {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className={`relative h-full w-80 ${sidebarOpen ? "" : "hidden"}`}>
            <div className="flex justify-between ">
                <h1 className="mt-[50px] mb-[50px] ml-5 w-[60%]">
                    <img src={booksLabLogo} alt="Logo" />
                </h1>

                <button
                    className="pr-3 transition-transform duration-300 transform hover:scale-110"
                    onClick={toggleSidebar}
                >
                    {sidebarOpen ? (
                        <IoIosClose style={{ fontSize: "40px", color: "gray" }} />
                    ) : (
                        <IoIosMenu style={{ fontSize: "40px", color: "gray" }} />
                    )}
                </button>
            </div>

            <div className="mt-[100px]">
                {Tabs.map((data) => {
                    const { id, name, Icon, path } = data;
                    const isActive = location.pathname === path;
                    return (
                        <NavLink
                            key={id}
                            to={path}
                            className={`mb-[25px] text-[1rem] mx-5 flex text-center text-[#191919] font-serif font-medium
                            px-8 button cursor-pointer 
                            ${isActive ? "button-active-style" : ""}`}
                        >
                            <span className="me-4 text-[24px]">{Icon}</span>
                            <button>{name}</button>
                        </NavLink>
                    );
                })}

                <div
                    className={`text-[1rem] mx-5 text-center text-[#191919] font-serif font-medium
                        px-8 button cursor-pointer mt-12`}
                >
                    <div className="bottom-20 absolute right-0 left-0 flex items-center justify-center gap-4">
                        <span className="text-[24px]">
                            {" "}
                            <AiOutlineLogout />
                        </span>

                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
