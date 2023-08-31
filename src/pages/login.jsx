import React, { useEffect } from "react";
import "../styles/login.css";
import { loginSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";

const Login = () => {
    const { errors, register, handleSubmit } = useSubmit(loginSchema);

    const onLogin = (data) => {
        console.log(data);
    };

    return (
        <React.Fragment>
            <div className="page">
                <div className="left">
                    <div className="left-content">
                        <h1>Welcome!</h1>
                        <p>Sign in to continue</p>
                        <form onSubmit={handleSubmit(onLogin)}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    placeholder="Type your email"
                                    autoComplete="email"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p style={{ textTransform: 'uppercase' }} className="text-red-600">{errors.email.message}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    placeholder="8+ characters"
                                    autoComplete="current-password"
                                    {...register("password")}
                                />
                                {errors.password && (
                                    <p style={{ textTransform: 'uppercase' }} className="text-red-600">{errors.password.message}</p>
                                )}
                            </div>
                            <button type="submit">Login</button>
                        </form>
                        <h5>
                            Don{`'`}t have an Account? <a href="register">Sign Up</a>
                        </h5>
                        <button>Login as Admin</button>
                    </div>
                </div>
                <div className="right">
                    <img src={"../assets/image_icon.png"} alt="image" />
                </div>
            </div>
        </React.Fragment>
    );
};
export default Login;
