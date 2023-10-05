import React from "react";
import LeftSidebar from "../components/leftSideBar";
import "../styles/editProfile.css";
import { Form, Link } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import Button from "./button";
import Input from "../components/input";
import { EditProfileSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";

const editProfile = () => {
    const { errors, register, handleSubmit} = useSubmit(EditProfileSchema);

    const processData = (data) => {
        console.log(data);
    }

    return (
        <>
            <section className="flex w-full h-full">
                <div className="w-1/5 bg-[#DFF6FF]">
                    <LeftSidebar />
                </div>
                <div className="flex flex-row bg-[#e6e6e6] relative">
                    <div className="flex flex-col gap-[52px] mx-auto p-10">
                        <div className="w-full">
                            <div className="w-full mx-auto h-[130px] mb-20 relative rounded-xl bg-[url('/Header.jpg')] bg-cover bg-center">
                                <img
                                    src="/women.png"
                                    alt="profile image"
                                    className="absolute bottom-0 left-0 w-[50px] h-[50px] rounded-full m-2"
                                />
                            </div>
                            <p className="w-full text-[#10B2F3] mx-auto text-xl font-Montserrat font-medium px-5">
                                Edit your information
                            </p>
                        </div>
                        <form className="w-full flex flex-row flex-wrap" onSubmit={handleSubmit(processData)}>
                            <div className="flex flex-row gap-10 mx-auto mb-10 w-full justify-between px-5">
                                <Input
                                    id="name"
                                    name="name"
                                    type="name"
                                    register={register}
                                    errors={errors}
                                    autoComplete="name"
                                    placeholder="Akeem"
                                />
                                <Input
                                    id="username"
                                    name="username"
                                    type="name"
                                    register={register}
                                    errors={errors}
                                    autoComplete="name"
                                    placeholder="@akeem_123star"
                                />
                                <Input
                                    name="phone"
                                    type="tel"
                                    for="phone"
                                    register={register}
                                    errors={errors}
                                    autoComplete="phone"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <input 
                            className="w-full mb-10 px-1"
                            placeholder="Victoria Island Lagos State Nigeria."
                            type="address"
                            id="address"
                             />
                            <input 
                            className="w-full mb-10 px-1"
                            placeholder="akeem123star@gmail.com"
                            type="email"
                            id="email"
                             />
                            <select className="h-[55px] w-full rounded-xl mb-10 px-1">
                                <option>Select level</option>
                                <option></option>
                            </select>
                            <Button
                                type="submit"
                                variant="primary"
                                borderVariant="noRadius"
                                className="w-28 mx-auto"
                            >
                                Done
                            </Button>
                        </form>
                    </div>
                    <div className="absolute right-2 top-4">
                        <Link to="/settings" className="ml-5 self-start">
                            <AiOutlineSetting />{" "}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
export default editProfile;
