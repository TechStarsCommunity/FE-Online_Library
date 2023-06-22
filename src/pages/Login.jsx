// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup";
import React from "react";
import MyImage from "../assets/image_icon.png";
import "../styles/login.css";

const Login = () => {
    // const schema = yup.object().shape({
    //     email: yup.string().email().required("Email is required"),
    //     password: yup.string().required("Password Is Required")
    // })

    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     resolver: yupResolver(schema)
    // })

    // const onSubmit = (data) => {
    //     console.log(data);
    // }

    return (
        <React.Fragment>
            <div className="page">
                <div className="left">
                    <div className="left-content">
                        <h1>Welcome!</h1>
                        <p>Sign in to continue</p>
                        <form>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" placeholder="Type your email" autoComplete="email" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="8+ characters" autoComplete="current-password" />
                            </div>
                            <button>Login</button>
                        </form>
                        <h5>
                            Don{`'`}t have an Account? <a href="register.html">Sign Up</a>
                        </h5>
                        <button>Login as Admin</button>
                    </div>
                </div>
                <div className="right">
                    <img src={MyImage} alt="image" />
                </div>
            </div>
        </React.Fragment>
    );
};
export default Login;
