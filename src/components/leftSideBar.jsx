import React from "react";
import booksLabLogo from "/booksLab_logo.png";
import { Tabs } from "../data/leftSideBarData";
import { AiOutlineLogout } from "react-icons/ai";
import Button from "./button";

const LeftSidebar = ({ active, setActive }) => {
    const handleClick = (id) => {
        setActive(id);
    };

    return (
        <React.Fragment>
            <div className="relative bg-black h-full max-w-[20rem]">
                <h1 className="mt-[50px] mb-[50px] mx-auto w-[60%]">
                    <img src={booksLabLogo} alt="Logo" />
                </h1>

                <div className="mt-[100px]">
                    {Tabs.map((data) => {
                        const { id, name, Icon } = data;
                        return (
                            <div
                                key={id}
                                onClick={() => handleClick(id)}
                                className={`mb-[25px] text-[1rem] mx-5 flex text-center text-[#191919] font-serif font-medium
                              px-8 button cursor-pointer ${
                                  active === id ? "button-active-style" : ""
                              }`}
                            >
                                <span className="me-4 text-[24px]">{Icon}</span>
                                <button>{name}</button>
                                {/* <Button className='text-black'>{name}</Button> */}
                            </div>
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
        </React.Fragment>
    );
};

export default LeftSidebar;