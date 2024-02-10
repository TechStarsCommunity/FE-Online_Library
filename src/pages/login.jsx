import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../components/button";
import Input from "../components/input";
import { LoginSchema } from "../config/schema";
import { SuccessToast } from "@/utils/toast";
import { useLoginMutation } from "../services/mutation/auth";
import useSubmit from "../hooks/useSubmit";
import "../styles/login.css";

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { mutateAsync: loginUser } = useLoginMutation();

    const { errors, register, handleSubmit } = useSubmit(LoginSchema);

    const onLogin = async (data) => {
        setLoading(true);
        try {
            const response = await loginUser(data);
            if (!response) {
                return;
            }
            SuccessToast("Login Successful");
            navigate("/");
        } catch (error) {
            console.log(error); /* Unexpected console statement */
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="main bg-white flex gap-12 py-8 px-4 md:py-0 md:px-0">
            <section className="w-[100%] md:w-[60%] m-auto full md:h-3/4">
                <form
                    onSubmit={handleSubmit(onLogin)}
                    className="flex flex-col items-center justify-center pl-8 max-xl:pt-20 max-md:w-auto sm:pt-18 md"
                >
                    <div className="w-[100%] max-w-[45rem] grid grid-cols-1 gap-4 mb-6 pt-0 md:mb-12">
                        <h1 className="text-sky-950 md:text-4xl text-2xl font-bold">
                            Welcome Back
                        </h1>
                        <p className="text-black text-sm md:text-base font-normal">
                            Sign in to continue
                        </p>
                    </div>
                    <div className="w-full py-8 max-w-[45rem] grid grid-cols-1 gap-4">
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            register={register}
                            errors={errors}
                            autoComplete="email"
                            placeholder="Email..."
                            id="email"
                        />
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            register={register}
                            errors={errors}
                            placeholder="Password..."
                            id="current-password"
                            autoComplete="current-password"
                        />
                    </div>
                    <Button
                        borderVariant="noRadius"
                        variant="primary"
                        type="submit"
                        className="w-full mt-6 max-w-[45rem] pd-3"
                        isLoading={loading}
                    >
                        Login
                    </Button>
                    <div className="w-full max-w-[45rem] grid grid-cols-1 gap-4">
                        <h5 className="text-sm lg:text-xl font-medium pt-3">
                            Don{`'`}t have an Account?{" "}
                            <a className="text-sky-950 text-sm lg:text-xl font-bold" href="/signup">
                                Sign Up
                            </a>
                        </h5>
                        <Button
                            borderVariant="noRadius"
                            variant="primary"
                            className="w-full mt-8 md:mt-12 max-w-[45rem]"
                        >
                            Login as Admin
                        </Button>
                    </div>
                </form>
            </section>
            <div className="right">
                <div className="image">
                    <div className="vectors"></div>
                </div>
            </div>
        </main>
    );
};

export default Login;
