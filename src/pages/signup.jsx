import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/signup.css";
import { useAppDispatch } from "../redux/store";
import "../styles/signup.css";
import { loginSuccess } from "../redux/authSlice";

const Signup = () => {
    const dispatch = useAppDispatch();

    const schema = yup.object().shape({
        name: yup.string().required("Your Name Is Required"),
        username: yup.string().required("Your Username Is Required"),
        email: yup
            .string()
            .email()
            .required("Your Email is Required, ensure it is the Correct Format"),
        password: yup.string().min(8).required(),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), undefined], "Passwords Don't Match")
            .required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        dispatch(loginSuccess(data));
    };
    return (
        <React.Fragment>
            <div className="main">
                <div className="left-section">
                    <div className="imgg">
                        <img src={"../assets/image.png"} className="imge" alt="image" />
                        <div className="vector">
                            <img src={"../assets/vector.png"} alt="vector" />
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="right-section">
                    <div className="hdngs">
                        <h2>WELCOME TO BOOKSLAB</h2>
                        <p>Register your account</p>
                    </div>
                    <input type="text" placeholder="Name ..." {...register("name")} />
                    <p> {errors.name?.message} </p>
                    <input type="text" placeholder="Username ..." {...register("username")} />
                    <p> {errors.username?.message} </p>
                    <input
                        type="text"
                        placeholder="Email ..."
                        {...register("email")}
                        autoComplete="email"
                    />
                    <p> {errors.email?.message} </p>
                    <input
                        type="password"
                        placeholder="Password ..."
                        {...register("password")}
                        autoComplete="new-password"
                    />
                    <p> {errors.password?.message} </p>
                    <input
                        type="password"
                        placeholder="Confirm Password ..."
                        {...register("confirmPassword")}
                        autoComplete="new-password"
                    />
                    <p> {errors.confirmPassword?.message} </p>
                    <input type="submit" />
                </form>
            </div>
        </React.Fragment>
    );
};

export default Signup;
