import React from "react";
import LeftSidebar from "../components/leftSideBar";
import { AiOutlineSetting } from "react-icons/ai";

const Profile = () => {
    return (
        <>
            <div className="flex h-screen max-w-screen">
                <LeftSidebar />
                <div className="m-10 rounded-lg border-2 border-red-800 w-[79%] h-[85vh]">
                    <div className="flex flex-col">
                        <div className=" relative bg-cover bg-center bg-[url('/Header.jpg')] h-32 p-4 rounded-md">
                            <img
                                src="/women.png"
                                alt="image"
                                className=" absolute rounded-full h-2/4 bottom-2 w-full"
                            />
                        </div>
                    </div>

                    <div className="mt-10 h-[74%] flex">
                        <div className="border-green-900 border-2 w-1/2"></div>
                        <div className="border-purple-900 border-2 w-1/2"></div>
                    </div>
                </div>
                <div className="mt-11 justify-end">
                    <AiOutlineSetting />
                </div>
            </div>
        </>
    );
};

export default Profile;
