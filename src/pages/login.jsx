import React, { useEffect } from "react";
import "../styles/login.css";
import { loginSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import loginLogo from "/booksLab_logo.png";

const Login = () => {
    const { errors, register, handleSubmit } = useSubmit(loginSchema);

    const onLogin = (data) => {
        console.log(data);
    };

    return (
        <React.Fragment>
            <div className=" bg-white grid grid-cols-[repeat(auto-fit,minmax(2px,1fr))] gap-0 h-screen w-full m-0 p-0">
                <div className="left">
                    <div className="left-content py-20">
                        <h1 className="text-sky-950 text-4xl font-semibold">Welcome Back</h1>
                        <p className="text-black text-base font-normal">Sign in to continue</p>
                        <form onSubmit={handleSubmit(onLogin)}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    placeholder="tola001@gmail.com"
                                    autoComplete="email"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p
                                        style={{ textTransform: "uppercase" }}
                                        className="text-red-600"
                                    >
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div className="outline-8 outline-purple-900">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    placeholder="8+ characters"
                                    autoComplete="current-password"
                                    {...register("password")}
                                />
                                {errors.password && (
                                    <p
                                        style={{ textTransform: "uppercase" }}
                                        className="text-red-600"
                                    >
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-cyan-600 to-teal-400 text-white"
                            >
                                Login
                            </button>
                        </form>
                        <h5 className="text-lg md:text-2xl font-medium">
                            Don{`'`}t have an Account?{" "}
                            <a
                                className="text-sky-950 text-lg md:text-2xl font-bold"
                                href="/signup"
                            >
                                Sign Up
                            </a>
                        </h5>
                        <button className="bg-gradient-to-r from-cyan-600 to-teal-400 text-white">
                            Login as Admin
                        </button>
                    </div>
                </div>
                <div className="hidden sm:flex h-full  bg-cover bg-center bg-[url('/loginImage.svg')] rounded-tl-3xl rounded-bl-3xl ml-[9vw]">
                    <div className="flex items-center justify-center w-full">
                        <img src={loginLogo} alt="logo" className="w-1/3" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Login;
