import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../components/button";
import Input from "../components/input";
import { SignUpSchema } from "../config/schema";
import { SuccessToast } from "@/utils/toast";
import { useRegisterMutation } from "@/services/mutation/auth";
import useSubmit from "../hooks/useSubmit";
import "../styles/signup.css";

const SignUp = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { mutateAsync: registerUser } = useRegisterMutation();

    const { errors, register, handleSubmit } = useSubmit(SignUpSchema);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await registerUser(data);
            if (!response) {
                return;
            }

            SuccessToast(response?.message);
            navigate("/auth-otp");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="main lg:pr-[5%]">
            <section className="left-section">
                <div className="imgg">
                    <div className="vector"></div>
                </div>
            </section>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-[90%] max-w-[60rem] mt-8">
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
                    autoComplete="username"
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
                            id="new-password"
                            autoComplete="new-password"
                        />
                    </div>
                    <div className="w-full">
                        <Input
                            label=" Confirm Password"
                            name="confirm_password"
                            type="password"
                            register={register}
                            errors={errors}
                            autoComplete="new-password"
                            placeholder="Confirm Password..."
                            id="new_password"
                        />
                    </div>
                </div>
                <Button borderVariant="noRadius" variant="primary" isLoading={loading}>
                    Sign Up
                </Button>{" "}
                <h5 className="mb-8">
                    Have an Account?
                    <Link to="/login">
                        {" "}
                        <span>Login</span>
                    </Link>
                </h5>
            </form>
        </main>
    );
};

export default SignUp;
