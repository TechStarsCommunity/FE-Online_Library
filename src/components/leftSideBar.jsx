import React, { useState } from "react";
import "../styles/leftSideBar.css";
import booksLabLogo from "/booksLab_logo.png";
import { Tabs as Tabs } from "../data/leftSideBarData";
import { AiOutlineLogout } from "react-icons/ai";

const LeftSidebar = ({ active, setActive }) => {
    const handleClick = (id) => {
        setActive(id);
    };

    return (
        <React.Fragment>
            <div className="">
                <h1 className="mt-[50px] mb-[50px]">
                    <img src={booksLabLogo} alt="Logo" />
                </h1>

                <div className="">
                    {Tabs.map((data) => {
                        const { id, name, icon } = data;
                        return (
                            <div
                                key={id}
                                onClick={() => handleClick(id)}
                                className={`mb-[25px] text-[1rem] mx-5 flex text-center text-[#191919] font-serif font-medium
                              px-8 button cursor-pointer ${
                                  active === data.id ? "button-active-style" : ""
                              }`}
                            >
                                <span className="me-4">{icon}</span>
                                <button>{name}</button>
                            </div>
                        );
                    })}
                    <div
                        className={`mb-[25px] text-[1rem] mx-5 flex text-center text-[#191919] font-serif font-medium
                        px-8 button cursor-pointer absolute bottom-5`}
                    >
                        <span className="me-4">
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
