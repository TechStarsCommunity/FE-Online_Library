import React from "react";
import LeftSidebar from "../components/leftSideBar";
import Button from "../components/button";
import { AiOutlineSetting, AiOutlineEdit } from "react-icons/ai";
import { PiToggleLeft } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Toggle } from "../components/toggle";

const Profile = () => {
    const logState = (state) => {
        console.log("Toggled:", state);
    };

    return (
        <>
            <div className="flex h-full w-screen">
                <div className="hidden sm:block bg-[#DFF6FF] h-full py-4 fixed ">
                    <LeftSidebar />
                </div>
            </div>
        </>
    );
};

export default Profile;
