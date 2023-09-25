import React from "react";
import "../styles/signup.css";
import { useAppDispatch } from "../redux/store";
import Button from "../components/button";
import { SignUpSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import Input from "../components/input";
import { Link } from "react-router-dom";

const Signup = () => {
    const { errors, register, handleSubmit } = useSubmit(SignUpSchema);
    const dispatch = useAppDispatch();

    const onSubmit = (data) => {
        // dispatch(loginSuccess(data));
        console.log(data);
    };
    return (
        <React.Fragment>
            <main className="main lg:pr-[5%]">
                <section className="left-section">
                    <div className="imgg">
                        <div className="vector"></div>
                    </div>
                </section>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-auto w-[90%] max-w-[60rem] mt-8"
                >
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
                    <div className="w-full flex flex-col md:flex-row justify-between gap-[5%] items-center">
                        <div className="w-full">
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
                        <div className="w-full">
                            <Input
                                label=" Confirm Password"
                                name="confirmPassword"
                                type="password"
                                register={register}
                                errors={errors}
                                autoComplete="new-password"
                                placeholder="Confirm Password..."
                                id="confirmPassword"
                            />
                        </div>
                    </div>
                    <Button borderVariant="noRadius" variant="primary">
                        Sign Up
                    </Button>{" "}
                    <h5 className="mb-8">
                        Have an Account?
                        <Link to="/login">
                            <span>Login</span>
                        </Link>
                    </h5>
                </form>
            </main>
        </React.Fragment>
    );
};

export default Signup;
