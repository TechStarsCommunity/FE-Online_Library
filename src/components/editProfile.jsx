import { AiOutlineEdit, AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

import Button from "./button";
import { EditProfileSchema } from "../config/schema";
import Input from "../components/input";

import useSubmit from "../hooks/useSubmit";

const EditProfile = () => {
    const { errors, register, handleSubmit } = useSubmit(EditProfileSchema);
    const fullInputStyle = {
        width: "100%",
        marginBottom: "50px",
        paddingLeft: "10px",
        paddingRight: "10px",
        borderRadius: "8px",
    };

    const shortInputStyle = {
        width: "100%",
        paddingLeft: "10px",
        paddingRight: "10px",
        borderRadius: "8px",
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
                <p className="w-full text-[#10B2F3] mx-auto text-xl font-Montserrat font-medium my-8">
                    Edit your information
                </p>
                <form className="w-full flex flex-col">
                    <div className="flex gap-10 flex-row mb-10 w-full justify-between flex-wrap">
                        <Input
                            id="name"
                            name="name"
                            type="name"
                            register={register}
                            errors={errors}
                            autoComplete="name"
                            placeholder="Akeem"
                            style={shortInputStyle}
                        />
                        <Input
                            id="username"
                            name="username"
                            type="name"
                            register={register}
                            errors={errors}
                            autoComplete="name"
                            placeholder="@akeem_123star"
                            style={shortInputStyle}
                        />
                        <Input
                            name="phone"
                            type="tel"
                            for="phone"
                            register={register}
                            errors={errors}
                            autoComplete="phone"
                            placeholder="Enter your phone number"
                            style={shortInputStyle}
                        />
                    </div>
                    <Input
                        id="address"
                        name="address"
                        type="address"
                        for="address"
                        register={register}
                        errors={errors}
                        style={fullInputStyle}
                        placeholder="Victoria Island Lagos State Nigeria."
                    />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        for="email"
                        register={register}
                        errors={errors}
                        style={fullInputStyle}
                        placeholder="akeem123star@gmail.com"
                    />

                    <select className="h-[55px] w-full rounded-xl mb-10 px-1">
                        <option>Select level</option>
                        <option></option>
                    </select>
                    <Button
                        type="submit"
                        variant="primary"
                        borderVariant="noRadius"
                        style={{
                            width: "7rem",
                            fontSize: "0.875rem",
                            padding: "0.75rem",
                            color: "black",
                            margin: "auto",
                        }}
                    >
                        Done
                    </Button>
                </form>
            </div>

            <Link to="/settings" className="ml-5">
                <AiOutlineSetting />{" "}
            </Link>
        </div>
    );
};
export default EditProfile;
