import React from "react";
import LeftSidebar from "../components/leftSideBar";
import { BsSearch } from "react-icons/bs";
import "../styles/home.css";
import Button from "../components/button";



const Popularbooks = () => {
    return (
        <>
            <div className="flex  h-full  w-screen">
                <div className="hidden sm:block">
                    <LeftSidebar />
                </div>
                <div className="flex flex-col m-10 ">
                    <div className="search-container">
                            <BsSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search"
                            />
                    </div>
                    <div>
                        <p>Categories</p>
                        <div></div>
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
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popularbooks;
