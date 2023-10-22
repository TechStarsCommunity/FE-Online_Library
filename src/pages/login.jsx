import React from "react";
import "../styles/login.css";
import { LoginSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import loginLogo from "/booksLab_logo.png";
import Button from "../components/button";
import Input from "../components/input";

const Login = () => {
    const { errors, register, handleSubmit } = useSubmit(LoginSchema);

    const onLogin = (data) => {
        console.log(data);
    };

    return (
        <React.Fragment>
            <div className=" bg-white">
                <div className="flex h-screen items-center justify-between">
                    <div className="lg:mx-32 px-[20px] w-full">
                        <h1 className="text-sky-950 md:text-4xl text-2xl font-semibold">
                            Welcome Back
                        </h1>
                        <p className="text-black text-sm md:text-base font-normal">
                            Sign in to continue
                        </p>
                        <form onSubmit={handleSubmit(onLogin)}>
                            <Input
                                label="Email"
                                name="email"
                                type="email"
                                register={register}
                                errors={errors}
                                autoComplete="email"
                                placeholder="Email..."
                            />
                            <Input
                                label="Password"
                                name="password"
                                type="password"
                                register={register}
                                errors={errors}
                                placeholder="Password..."
                                id="password"
                            />
                            <Button
                                borderVariant="noRadius"
                                variant="primary"
                                type="submit"
                                className="w-full mt-14"
                            >
                                Login
                            </Button>
                        </form>
                        <h5 className="text-lg md:text-xl font-medium">
                            Don{`'`}t have an Account?{" "}
                            <a className="text-sky-950 text-sm lg:text-xl font-bold" href="/signup">
                                Sign Up
                            </a>
                        </h5>
                        <Button borderVariant="noRadius" variant="primary" className="w-full mt-14">
                            Login as Admin
                        </Button>
                    </div>
                </div>

                <div className="hidden sm:flex h-full  bg-cover bg-center bg-[url('/loginImage.svg')] rounded-tl-3xl rounded-bl-3xl ml-[9vw]">
                    <div className="flex items-center justify-center w-full">
                        <img src={loginLogo} alt="logo" className="w-1/3" />
                        <div className="hidden sm:flex h-screen bg-cover bg-center bg-[url('/loginImage.svg')] rounded-tl-3xl rounded-bl-3xl basis-4/5 justify-self-end">
                            <div className="flex items-center justify-center w-full">
                                <img src={loginLogo} alt="logo" className="w-1/3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Login;
