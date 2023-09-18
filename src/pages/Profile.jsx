import React from "react";
import LeftSidebar from "../components/leftSideBar";
import Button from "../components/button";
import { AiOutlineSetting, AiOutlineEdit } from "react-icons/ai";
import { PiToggleLeft } from "react-icons/pi";
import ToogleSwitch from "../components/toggle";
import { BiHide } from "react-icons/bi";

const Profile = () => {
    return (
        <>
            <div className="flex justify-center h-full  w-screen">
                <div className="hidden sm:block">
                    <LeftSidebar />
                </div>
                <div className="flex justify-center m-10 ">
                    <div className="flex flex-col gap-5 justify-between">
                        <div className=" relative bg-cover bg-center bg-[url('/Header.jpg')] h-32 p-4 rounded-md">
                            <img
                                src="/women.png"
                                alt="image"
                                className=" absolute rounded-full h-2/4 bottom-2 "
                            />
                            <div className="flex text-white items-center absolute bottom-2 right-5">
                                <AiOutlineEdit /> Edit
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-12">
                            <div className="flex flex-col">
                                <div className="flex gap-12">
                                    <div className="flex flex-col">
                                        <p className="text-sky-500 text-lg font-medium">Name</p>
                                        <p className="md:text-xl text-base font-medium py-3">
                                            Akeem
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sky-500 text-lg font-medium">Username</p>
                                        <p className="md:text-xl text-base font-medium py-3">
                                            @akeem_123star
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sky-500 text-lg font-medium">Mail</p>
                                    <p className="md:text-xl text-base font-medium py-3">
                                        akeem123star@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex gap-12">
                                    <div className="flex flex-col">
                                        <p className="text-sky-500 text-lg font-medium">
                                            Phone number{" "}
                                        </p>
                                        <p className="md:text-xl text-base font-medium py-3">
                                            +234 8020653695
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sky-500 text-lg font-medium">Location</p>
                                        <p className="md:text-xl text-base font-medium py-3">
                                            Victorial island ibadan
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button
                            borderVariant="noRadius"
                            variant="primary"
                            className="w-28 text-sm h-10 pb-3 text-black"
                        >
                            Edit Profile
                        </Button>
                        <div className="flex justify-between flex-col md:flex-row gap-12 md:gap-52">
                            <div className="flex flex-col text-black">
                                <p className="text-sky-500 text-3xl font-medium pb-3">
                                    Notification{" "}
                                </p>
                                <p className="text-neutral-600 md:text-lg text-xs font-normal pb-5">
                                    Choose how you want to receive your notification{" "}
                                </p>
                                <div className="flex justify-between">
                                    <p className="md:text-xl text-base font-medium items-center">
                                        Email
                                    </p>
                                    <ToogleSwitch />
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="md:text-xl text-base font-medium">Sms</p>
                                    <ToogleSwitch />
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="md:text-xl text-base font-medium">
                                        Desktop notification
                                    </p>
                                    <ToogleSwitch/>
                                </div>
                            </div>
                            <div className="flex flex-col text-black">
                                <p className="text-sky-500 text-3xl font-medium pb-3">
                                    Appearance{" "}
                                </p>
                                <p className="text-neutral-600 md:text-lg text-xs font-normal pb-5 pr-40">
                                    Change you view booklab{" "}
                                </p>
                                <div className="flex justify-between items-center">
                                    <p className="md:text-xl text-base font-medium">Dark Mode</p>
                                    <ToogleSwitch/>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="md:text-xl text-base font-medium ">Light Mode</p>
                                    <ToogleSwitch />
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="md:text-xl text-base font-medium">
                                        Eye care mode
                                    </p>
                                    <ToogleSwitch />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-5 justify-end">
                        <AiOutlineSetting />{" "}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
