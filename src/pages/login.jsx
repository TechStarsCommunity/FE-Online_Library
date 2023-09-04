import React, { useEffect } from "react";
import "../styles/login.css";
import { loginSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import loginLogo from "/booksLab_logo.png";
import Button from "../components/button";

const Login = () => {
    const { errors, register, handleSubmit } = useSubmit(loginSchema);

    const onLogin = (data) => {
        console.log(data);
    };

    return (
        <React.Fragment>
            <div className=" bg-white w-full">
                <div className="flex h-screen items-center justify-between">
                    <div className="lg:mx-32 px-20 w-full">
                        <h1 className="text-sky-950 md:text-4xl text-2xl font-semibold">Welcome Back</h1>
                        <p className="text-black text-sm md:text-base font-normal">Sign in to continue</p>
                        <form onSubmit={handleSubmit(onLogin)}>
                            <div className="mt-10">
                                <label htmlFor="email" className=" text-lg">Email</label>
                                <input
                                    className="focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300"
                                    type="text"
                                    placeholder="tola001@gmail.com"
                                    autoComplete="email"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p
                                        style={{ textTransform: "capitalize" }}
                                        className="text-red-600"
                                    >
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div className="mt-10">
                                <label htmlFor="password" className=" text-lg">Password</label>
                                <input
                                    className="focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300"
                                    type="password"
                                    placeholder="8+ characters"
                                    autoComplete="current-password"
                                    {...register("password")}
                                />
                                {errors.password && (
                                    <p
                                        style={{ textTransform: "capitalize" }}
                                        className="text-red-600"
                                    >
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                            <Button
                                borderVariant="noRadius" variant="primary"
                                type="submit"
                                className="w-full"
                            >
                                Login
                            </Button>
                        </form>
                        <h5 className="text-lg md:text-xl font-medium">
                            Don{`'`}t have an Account?{" "}
                            <a
                                className="text-sky-950 text-sm lg:text-xl font-bold"
                                href="/signup"
                            >
                                Sign Up
                            </a>
                        </h5>
                        <Button
                            borderVariant="noRadi
                            us" 
                            variant="primary">
                            Login as Admin
                        </Button>
                    </div>
                    <div className="hidden sm:flex h-screen bg-cover bg-center bg-[url('/loginImage.svg')] rounded-tl-3xl rounded-bl-3xl basis-4/5 justify-self-end">
                        <div className="flex items-center justify-center w-full">
                            <img src={loginLogo} alt="logo" className="w-1/3" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Login;
