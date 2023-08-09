import React from "react";
import "../styles/signup.css";
import { useAppDispatch } from "../redux/store";
import "../styles/signup.css";
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
                    <p className="text-red-600"> {errors.name?.message} </p>
                    <input type="text" placeholder="Username ..." {...register("username")} />
                    <p className="text-red-600"> {errors.username?.message} </p>
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
                    <p className="text-red-600"> {errors.password?.message} </p>
                    <input
                        type="password"
                        placeholder="Confirm Password ..."
                        {...register("confirmPassword")}
                        autoComplete="new-password"
                    />
                    <p className="text-red-600"> {errors.confirmPassword?.message} </p>
                    <input type="submit" />
                </form>
            </div>
        </React.Fragment>
    );
};

export default Signup;
