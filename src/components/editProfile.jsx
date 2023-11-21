import { React, Fragment } from "react";
import LeftSidebar from "../components/leftSideBar";
import { Link } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import Button from "./button";
import Input from "../components/input";
import { EditProfileSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import { useState } from "react";

const editProfile = () => {
    const { errors, register, handleSubmit } = useSubmit(EditProfileSchema);
    const [leftBarOpen, setLeftBarOpen] = useState(true);

    const processData = (data) => {
        console.log(data);
    };

    function openNav() {
        setLeftBarOpen((prev) => !prev);
    }

    return (
        <Fragment>
            <section className="flex w-full h-full">
                {leftBarOpen && (
                    <div className={`w-1/5 bg-[#DFF6FF]`}>
                        <LeftSidebar />
                    </div>
                )}
                <div className="flex flex-row bg-[#e6e6e6] relative w-full">
                <div onClick={openNav} className="self-start">
                    <div className="border border-slate-950 px-2 m-1"></div>
                    <div className="border border-slate-950 px-2 m-1"></div>
                    <div className="border border-slate-950 px-2 m-1"></div>
                </div>
                    <div className="flex flex-col gap-[3rem]] mx-auto p-10">
                        
                        <div className="w-full">
                            <div className="w-full mx-auto h-[8rem] mb-20 relative rounded-xl bg-[url('/Header.jpg')] bg-cover bg-center">
                                <img
                                    src="/women.png"
                                    alt="profile image"
                                    className="absolute bottom-0 left-0 w-[3rem] h-[3rem] rounded-full m-2"
                                />
                            </div>
                            <p className="w-full text-[#10B2F3] mx-auto text-xl font-Montserrat font-medium px-5">
                                Edit your information
                            </p>
                        </div>
                        <form
                            className="w-full flex flex-row flex-wrap"
                            onSubmit={handleSubmit(processData)}
                        >
                            <div className="flex flex-col sm:flex-row gap-10 mx-auto mb-10 w-full justify-between px-5">
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    register={register}
                                    errors={errors}
                                    placeholder="Akeem"
                                />
                                <Input
                                    id="username"
                                    name="username"
                                    type="text"
                                    for="username"
                                    register={register}
                                    errors={errors}
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
                            <div className="w-full flex gap-10">
                                <Input
                                    name="address"
                                    placeholder="Victoria Island Lagos State Nigeria."
                                    type="address"
                                    id="address"
                                    register={register}
                                    errors={errors}
                                />
                                <Input
                                    placeholder="akeem123star@gmail.com"
                                    type="email"
                                    name="email"
                                    id="email"
                                    register={register}
                                    errors={errors}
                                />
                                <select className="w-full">
                                    <option>Select level</option>
                                    <option></option>
                                </select>
                            </div>

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
        </Fragment>
    );
};
export default editProfile;
