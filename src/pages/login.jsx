import React from "react";
import "../styles/login.css";
import loginImage from "../assets/loginImage.svg";
import Logo from "../assets/booksLab_logo.png";

const Login = () => {
    return (
        <React.Fragment>
            <div className=" bg-white grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-0 h-screen w-full m-0 p-0">
                <div className="left">
                    <div className="left-content py-20">
                        <h1 className="text-sky-950 text-4xl font-semibold">Welcome Back</h1>
                        <p className="text-black text-base font-normal">Sign in to continue</p>
                        <form>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    placeholder="tola001@gmail.com"
                                    autoComplete="email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    placeholder="8+ characters"
                                    autoComplete="current-password"
                                />
                            </div>
                            <button className="bg-gradient-to-r from-cyan-600 to-teal-400 text-white">Login</button>
                        </form>
                        <h5 className="text-2xl font-medium">
                            Don{`'`}t have an Account? <a className="text-sky-950 text-2xl font-bold" href="register">Sign Up</a>
                        </h5>
                        <button className="bg-gradient-to-r from-cyan-600 to-teal-400 text-white">Login as Admin</button>
                    </div>
                </div>
                <div className="right">
                    <img src={loginImage} alt="image" />
                </div>
            </div>
        </React.Fragment>
    );
};
export default Login;
