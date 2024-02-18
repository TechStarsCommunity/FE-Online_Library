// eslint-disable-next-line unicorn/filename-case
// eslint-disable-next-line unicorn/filename-case
import { AiOutlineEdit, AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { PiToggleLeft } from "react-icons/pi";

import Button from "../components/button";

const Profile = () => {
    const toggleStyle = {
        width: "24px",
        height: "24px",
    };
    return (
        <div className="flex w-full h-100vh min-h-lvh sm:w-full items-start p-10 sm:left-[20.6rem]  bg-[#e6e6e6]">
            <div className="flex flex-col gap-5 justify-between w-full">
                <div className=" bg-cover bg-center bg-[url('/Header.jpg')] h-32 p-4 rounded-md relative">
                    <img
                        src="/women.png"
                        alt="image"
                        className=" rounded-full h-2/4 bottom-2 absolute"
                    />
                    <Link
                        to="/profile/editProfile"
                        className="flex text-white items-center absolute bottom-2 right-5"
                    >
                        <AiOutlineEdit /> Edit
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-12 flex-wrap">
                    <div>
                        <p className="text-sky-500 text-lg font-medium">Name</p>
                        <p className="text-sm md:text-base font-medium py-3">Akeem</p>
                    </div>
                    <div>
                        <p className="text-sky-500 text-lg font-medium">Location</p>
                        <p className="md:text-xl text-base font-medium py-3">@akeem_123star</p>
                    </div>

                    <div>
                        <p className="text-sky-500 text-lg font-medium">Phone number </p>
                        <p className="text-sm md:text-base font-medium py-3">+234 8020653695</p>
                    </div>
                    <div>
                        <p className="text-sky-500 text-lg font-medium">Location</p>
                        <p className="text-sm md:text-base font-medium py-3">
                            Victoria island ibadan
                        </p>
                    </div>
                    <div className="sm:w-full">
                        <p className="text-sky-500 text-lg font-medium">Mail</p>
                        <p className="text-sm md:text-base font-medium py-3">
                            akeem123star@gmail.com
                        </p>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button
                        borderVariant="noRadius"
                        variant="primary"
                        style={{
                            width: "7rem",
                            fontSize: "0.875rem",
                            padding: "0.75rem",
                            color: "black",
                        }}
                    >
                        Edit Profile
                    </Button>
                </div>

                <div className="flex w-3/4 flex-col md:flex-row justify-between ">
                    <div className="flex flex-col text-black">
                        <p className="text-sky-500 text-3xl font-medium pb-3">Notification </p>
                        <p className="text-neutral-600 md:text-lg text-xs font-normal pb-5">
                            Choose how you want to receive your notification{" "}
                        </p>
                        <div className="flex justify-between">
                            <p className="md:text-xl text-base font-medium">Email</p>
                            <PiToggleLeft style={toggleStyle} />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="md:text-xl text-base font-medium">Sms</p>
                            <PiToggleLeft style={toggleStyle} />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="md:text-xl text-base font-medium">Desktop notification</p>
                            <PiToggleLeft style={toggleStyle} />
                        </div>
                    </div>

                    <div className="flex flex-col text-black">
                        <p className="text-sky-500 text-3xl font-medium pb-3">Appearance </p>
                        <p className="text-neutral-600 md:text-lg text-xs font-normal pb-5 md:pr-40">
                            Change your of view Bookslab{" "}
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="md:text-xl text-base font-medium">Dark Mode</p>
                            <PiToggleLeft style={toggleStyle} />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="md:text-xl text-base font-medium ">Light Mode</p>
                            <PiToggleLeft style={toggleStyle} />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="md:text-xl text-base font-medium">Eye care mode</p>
                            <PiToggleLeft style={toggleStyle} />
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/settings" className="ml-5">
                <AiOutlineSetting />{" "}
            </Link>
        </div>
    );
};

export default Profile;
