import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

export default function profile() {
    return (
        <div className="flex w-screen sm:w-fit items-center p-10 sm:absolute min-h-100vh sm:left-[15.6rem] bg-[#e6e6e6] ">
            <div className="flex flex-col gap-5 justify-between">
                <div className=" relative bg-cover bg-center bg-[url('/Header.jpg')] h-32 p-4 rounded-md">
                    <img
                        src="/women.png"
                        alt="image"
                        className=" absolute rounded-full h-2/4 bottom-2 "
                    />
                    <Link
                        to="/editprofile"
                        className="flex text-white items-center absolute bottom-2 right-5"
                    >
                        <AiOutlineEdit /> Edit
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-12">
                    <div className="flex flex-col">
                        <div className="flex gap-12">
                            <div className="flex flex-col">
                                <p className="text-sky-500 text-lg font-medium">Name</p>
                                <p className="text-sm md:text-base font-medium py-3">Akeem</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sky-500 text-lg font-medium">Username</p>
                                <p className="text-sm md:text-base font-medium py-3">
                                    @akeem_123star
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sky-500 text-lg font-medium">Mail</p>
                            <p className="text-sm md:text-base font-medium py-3">
                                akeem123star@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-12">
                            <div className="flex flex-col">
                                <p className="text-sky-500 text-lg font-medium">Phone number </p>
                                <p className="text-sm md:text-base font-medium py-3">
                                    +234 8020653695
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sky-500 text-lg font-medium">Location</p>
                                <p className="text-sm md:text-base font-medium py-3">
                                    Victorial island ibadan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button
                        borderVariant="noRadius"
                        variant="primary"
                        className="w-28 text-sm h-10 pb-3 text-black"
                    >
                        Edit Profile
                    </Button>
                </div>
                <div className="flex justify-between flex-col md:flex-row gap-12 md:gap-52">
                    <div className="flex flex-col text-black">
                        <p className="text-sky-500 text-3xl font-medium pb-3">Notification </p>
                        <p className="text-neutral-600 md:text-lg text-xs font-normal pb-5">
                            Choose how you want to receive your notification{" "}
                        </p>
                        <div className="flex justify-between">
                            <p className="text-sm md:text-base font-medium items-center">Email</p>
                            <Toggle toggled={true} onClick={logState} />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm md:text-base font-medium">Sms</p>
                            <Toggle toggled={true} onClick={logState} />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm md:text-base font-medium">Desktop notification</p>
                            <Toggle toggled={true} onClick={logState} />
                        </div>
                    </div>
                    <div className="flex flex-col text-black">
                        <p className="text-sky-500 text-3xl font-medium pb-3">Appearance </p>
                        <p className="text-neutral-600 md:text-lg text-xs font-normal pb-5 md:pr-40">
                            Change you view booklab{" "}
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="text-sm md:text-base font-medium">Dark Mode</p>
                            <Toggle toggled={true} onClick={logState} />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm md:text-base font-medium ">Light Mode</p>
                            <Toggle toggled={true} onClick={logState} />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm md:text-base font-medium">Eye care mode</p>
                            <Toggle toggled={true} onClick={logState} />
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/settings" className="ml-5 self-start">
                <AiOutlineSetting />{" "}
            </Link>
        </div>
    );
}