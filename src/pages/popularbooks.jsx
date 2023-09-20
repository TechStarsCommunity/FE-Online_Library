import React from "react";
import LeftSidebar from "../components/leftSideBar";
import { BsSearch } from "react-icons/bs";
import "../styles/home.css";
import Button from "../components/button";

const Popularbooks = () => {
    return (
        <>
            <div className="flex h-full  w-screen">
                <div className="hidden sm:block">
                    <LeftSidebar />
                </div>
                <div className="flex flex-col m-10 bg-black">
                    <div className="search-container">
                        <BsSearch className="search-icon" />
                        <input type="text" placeholder="Search" />
                    </div>
                    <div>
                        <p>Categories</p>
                        <div className="p-5 bg-white rounded-lg flex gap-3">
                            <div className="flex items-center">
                                <img
                                    src="./frontend.png"
                                    alt="Frontend Development"
                                    className="h-20"
                                />
                                <p>Frontend Development</p>
                            </div>
                            <div className="flex items-center ">
                                <img
                                    src="./webdevelopment.png"
                                    alt="backend development"
                                    className="h-20"
                                />
                                <p>Backend Development</p>
                            </div>
                            <div className="flex items-center">
                                <img src="./designer.png" alt=" ui/ux designer" className="h-20" />
                                <p>Product Design</p>
                            </div>
                            <div className="flex items-center">
                                <img
                                    src="./creativewriter.png"
                                    alt="content writer"
                                    className="h-20"
                                />
                                <p>Content Writing</p>
                            </div>
                            <img src="./datascientist.png" alt="data scienctist" className="h-20" />
                        </div>
                    </div>
                    <Button
                        borderVariant="noRadius"
                        variant="primary"
                        className=" w-52 text-sm h-10"
                    >
                        Show all categories
                    </Button>
                    <div>
                        <p>Popular books</p>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popularbooks;
