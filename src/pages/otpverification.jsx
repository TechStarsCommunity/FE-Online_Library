import React from "react";
import "../styles/verification.css";
import { useAppDispatch } from "../redux/store";
import "../styles/signup.css";
import Button from "../components/button/button";
import { loginSuccess } from "../redux/authSlice";
import { signUpSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import Input from "../components/input/input";
import { Link } from "react-router-dom";

const OTPVerification = () => {
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
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="right-section"></form>
                    <div className="container">
                        <div className="hdngs">
                            <h2>Verification</h2>
                            <p>Enter the Code sent to your email below</p>
                        </div>

                        <div className="container">
                            <h2 className="hhd">Code</h2>
                            <div className="code.container">
                                <input
                                    type="number"
                                    className="code"
                                    placeholder="0"
                                    min="0"
                                    max="9"
                                    required
                                />
                                <input
                                    type="number"
                                    className="code"
                                    placeholder="0"
                                    min="0"
                                    max="9"
                                    required
                                />
                                <input
                                    type="number"
                                    className="code"
                                    placeholder="0"
                                    min="0"
                                    max="9"
                                    required
                                />
                                <input
                                    type="number"
                                    className="code"
                                    placeholder="0"
                                    min="0"
                                    max="9"
                                    required
                                />
                                <input
                                    type="number"
                                    className="code"
                                    placeholder="0"
                                    min="0"
                                    max="9"
                                    required
                                />
                                <input
                                    type="number"
                                    className="code"
                                    placeholder="0"
                                    min="0"
                                    max="9"
                                    required
                                />
                            </div>
                        </div>
                        <p className="hdgn">
                            Didn't receive a code? <a href="resend">Resend</a>
                        </p>

                        <Link to="/">
                            <Button style={{ width: "50%" }} borderVariant="8" variant="primary">
                                Continue
                            </Button>{" "}
                        </Link>
                        <p className="hdgn">
                            wrong email? <a href="reset">Reset</a>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OTPVerification;
