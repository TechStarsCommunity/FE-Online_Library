import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "../styles/home.css";
import Button from "../components/button";
import LeftSidebar from "../components/leftSideBar";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const Popularbooks = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toogleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <>
            <div className="flex w-screen">
                <div className="flex">
                    <button
                        className="transition-transform duration-300 transform hover:scale-110"
                        onClick={toogleSidebar}
                    >
                        <IoIosMenu
                            style={{
                                fontSize: "40px",
                                color: "gray",
                                marginTop: "40px",
                                marginLeft: "20px",
                            }}
                        />
                    </button>

                    {sidebarVisible && (
                        <div
                            className={`bg-[#DFF6FF] h-full px-0 py-4 fixed mx-0 transition-all duration-300 ease-in-out ${
                                sidebarVisible ? "left-0" : "-left-[20.6rem]"
                            }`}
                        >
                            <LeftSidebar />
                        </div>
                    )}
                </div>

                <div className="flex flex-col w-screen sm:w-fit items-center text-center p-10 sm:absolute sm:right-0 min-h-100vh sm:left-[20.6rem] bg-[#FAFDFF]">
                    <div className="sm:absolute">
                        <div
                            className="search-container drop-shadow-md border-0"
                            style={{ border: "0", background: "#FFFFFF" }}
                        >
                            <BsSearch className="search-icon" />
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="text-black font-semibold font-['Montserrat']">
                            <p className="text-2xl py-5 ">Categories</p>
                            <div className="p-5 lg:text-lg text-sm  items-center bg-white rounded-lg bg-[#FFFFFF] drop-shadow-md flex flex-col md:flex-row gap-3">
                                <div className="flex flex-col md:flex-row items-center">
                                    <img
                                        src="./frontend.png"
                                        alt="Frontend Development"
                                        className="lg:h-20 h-10"
                                    />
                                    <p>Frontend Development</p>
                                </div>
                                <div className="flex flex-col md:flex-row items-center ">
                                    <img
                                        src="./webdevelopment.png"
                                        alt="backend development"
                                        className="lg:h-20 h-10"
                                    />
                                    <p>Backend Development</p>
                                </div>
                                <div className="flex flex-col md:flex-row items-center">
                                    <img
                                        src="./designer.png"
                                        alt=" ui/ux designer"
                                        className="lg:h-20 h-10"
                                    />
                                    <p>Product Design</p>
                                </div>
                                <div className="flex flex-col md:flex-row items-center">
                                    <img
                                        src="./creativewriter.png"
                                        alt="content writer"
                                        className="lg:h-20 h-10"
                                    />
                                    <p>Content Writing</p>
                                </div>
                                <img
                                    src="./datascientist.png"
                                    alt="data scienctist"
                                    className="h-10 w-10 lg:w-20 lg:h-20"
                                />
                            </div>
                        </div>
                        <Link to="/bookdetails" className=" flex justify-center my-10">
                            <Button
                                borderVariant="noRadius"
                                variant="primary"
                                className=" w-52 text-sm h-10"
                            >
                                Show all categories
                            </Button>
                        </Link>
                        <div>
                            <p>Popular books</p>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popularbooks;
