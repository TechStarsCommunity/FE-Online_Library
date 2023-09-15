import React from "react";
import LeftSidebar from "../components/leftSideBar";
import { AiOutlineSetting } from "react-icons/ai";

const Profile = () => {
    return (
        <>
            <div className="flex h-screen max-w-screen">
                <LeftSidebar />
                <div className="m-10 rounded-lg border-2 border-red-800 w-[70%] h-[85vh]">
                    <div className="flex flex-col">
                        <div className=" relative bg-cover bg-center bg-[url('/Header.jpg')] h-32 p-4 rounded-md">
                            <img
                                src="/women.png"
                                alt="image"
                                className=" absolute rounded-full h-2/4 bottom-2 w-full"
                            />
                        </div>
                    </div>

                    <div className="mt-10 h-[76%] block">
                        <div className="flex border-green-900 border-2 h-1/2">
                            <div className="border-purple-900 border-4 w-2/4">
                                <div className="flex justify-between border-4 border-red-500 h-1/2">
                                    <div className="p-4 pr-6">
                                        <h6 className="text-cyan-400 text-lg pb-4">Name</h6>
                                        <h6 className="font-medium text-lg">Akeem</h6>
                                    </div>
                                    <div className="p-4">
                                        <h6 className="text-cyan-400 text-lg pb-4">Location</h6>
                                        <h6 className="font-medium text-lg">@akeem_123star</h6>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h6 className="text-cyan-400 text-lg pb-4">Mail</h6>
                                    <h6 className="font-medium text-lg">akeem123star@gmail.com</h6>
                                </div>
                            </div>
                            <div className="border-yellow-900 border-4 w-3/4 pl-40">
                                <div className="flex justify-between border-4 border-red-500 h-1/2">
                                    <div className="p-4 pr-6">
                                        <h6 className="text-cyan-400 text-lg pb-4">Phone Number</h6>
                                        <h6 className="font-medium text-lg">+234 08020653695</h6>
                                    </div>
                                    <div className="p-4">
                                        <h6 className="text-cyan-400 text-lg pb-4">Location</h6>
                                        <h6 className="font-medium text-lg">
                                            Victoria Island Ibadan
                                        </h6>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h6 className="text-cyan-400 text-lg pb-4">Password</h6>
                                    <h6 className="font-medium text-lg">
                                        .................................
                                    </h6>
                                </div>
                                <button className="bg-sky-400 p-2 text-l font-medium rounded">
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                        <div className="flex border-purple-900 border-2 h-1/2">
                            <div className=" border-purple-900 border-4 w-1/3"></div>
                            <div className="border-yellow-900 border-4 w-2/3"></div>
                        </div>
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
