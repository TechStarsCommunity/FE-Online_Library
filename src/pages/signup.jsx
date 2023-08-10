import React from "react";
import "../styles/signup.css";
import { useAppDispatch } from "../redux/store";
import "../styles/signup.css";
import Button from "../components/button/button";
import { loginSuccess } from "../redux/authSlice";
import { signUpSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";

const Signup = () => {
    const { errors, register, handleSubmit } = useSubmit(signUpSchema);
    const dispatch = useAppDispatch();

    const onSubmit = (data) => {
        // dispatch(loginSuccess(data));
        console.log(data);
    };
    return (
        <React.Fragment>
            <div className="main">
                <div className="left-section">
                    <div className="imgg">
                        {/* <img src={"../assets/authPage_bg.png"} className="imge" alt="image" /> */}
                        <div className="vector">
                            {/* <img src={"../assets/booksLab_logo.png"} alt="vector" /> */}
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="right-section">
                    <div className="hdngs">
                        <h2>WELCOME TO BOOKSLAB</h2>
                        <p>Register your account</p>
                    </div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name ..." id="name" {...register("name")} />
                    <p className="text-red-600"> {errors.name?.message} </p>
                    <p></p>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Username ..."
                        id="username"
                        {...register("username")}
                    />
                    <p className="text-red-600"> {errors.username?.message} </p>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Email ..."
                        {...register("email")}
                        id="email"
                        autoComplete="email"
                    />
                    <p className="text-red-600"> {errors.email?.message} </p>
                    {/* container for passwords */}
                    <div className="password-container">
                        <div className="password-child">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Password ..."
                                id="password"
                                {...register("password")}
                                autoComplete="new-password"
                            />
                            <p className="text-red-600"> {errors.password?.message} </p>
                        </div>
                        <div className="password-child">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm Password ..."
                                {...register("confirmPassword")}
                                autoComplete="new-password"
                            />
                            <p className="text-red-600"> {errors.confirmPassword?.message} </p>
                        </div>
                    </div>
                    <Button borderVariant="noRadius" variant="primary">
                        Sign Up
                    </Button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Signup;
