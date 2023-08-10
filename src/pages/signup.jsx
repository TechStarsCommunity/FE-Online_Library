import React from "react";
import "../styles/signup.css";
import { useAppDispatch } from "../redux/store";
import "../styles/signup.css";
import Button from "../components/button/button";
import { loginSuccess } from "../redux/authSlice";
import { signUpSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import Input from "../components/input/input";
import { Link } from "react-router-dom";

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
                    <Input
                        label="Name"
                        name="name"
                        type="text"
                        register={register}
                        errors={errors}
                        autoComplete="name"
                        placeholder="Name..."
                    />
                    <Input
                        label="Username"
                        name="username"
                        type="text"
                        register={register}
                        errors={errors}
                        placeholder="Username..."
                    />
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        register={register}
                        errors={errors}
                        autoComplete="email"
                        placeholder="Email..."
                    />

                    {/* container for passwords */}
                    <div className="password-container">
                        <div className="password-child">
                            <Input
                                label="Password"
                                name="password"
                                type="password"
                                register={register}
                                errors={errors}
                                placeholder="Password..."
                                id="password"
                            />
                        </div>
                        <div className="password-child">
                            <Input
                                label=" Confirm Password"
                                name="confirm-password"
                                type="password"
                                register={register}
                                errors={errors}
                                autoComplete="new-password"
                                placeholder="Confirm Password..."
                                id="confirmPassword"
                            />
                        </div>
                    </div>

                    <Link to="/">
                        <Button borderVariant="noRadius" variant="primary">
                            Sign Up
                        </Button>{" "}
                    </Link>

                    <h5>
                        Have an Account?
                        <Link to="/login">
                            {" "}
                            <a href="">Login</a>
                        </Link>
                    </h5>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Signup;
