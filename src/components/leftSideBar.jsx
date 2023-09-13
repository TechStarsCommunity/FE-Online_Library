import React, { useState } from "react";
import "../styles/leftSideBar.css";
import booksLabLogo from "/booksLab_logo.png";
import { Tabs as Tabs } from "../data/leftSideBarData";
import { AiOutlineLogout } from "react-icons/ai";
import Button from "./button";

const LeftSidebar = ({ active, setActive }) => {
    const handleClick = (id) => {
        setActive(id);
    };

    return (
        <React.Fragment>
            <div className="relative bg-black h-full">
                <h1 className="mt-[50px] mb-[50px] mx-auto w-[60%]">
                    <img src={booksLabLogo} alt="Logo" />
                </h1>

                <div className="mt-[100px]">
                    {Tabs.map((data) => {
                        const { id, name, icon } = data;
                        return (
                            <div
                                key={id}
                                onClick={() => handleClick(id)}
                                className={`mb-[25px] text-[1rem] mx-5 flex text-center text-[#191919] font-serif font-medium
                              px-8 button cursor-pointer ${
                                  active === id ? "button-active-style" : ""
                              }`}
                            >
                                <span className="me-4 text-[24px]">{icon}</span>
                                <button>{name}</button>
                                {/* <Button className='text-black'>{name}</Button> */}
                            </div>
                        );
                    })}
                    <div
                        className={`text-[1rem] mx-5 flex text-center text-[#191919] font-serif font-medium
                        px-8 button cursor-pointer absolute mt-12 flex items-center`}
                    >
                        <span className="me-4 text-[24px]">
                            {" "}
                            <AiOutlineLogout />
                        </span>
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LeftSidebar;
