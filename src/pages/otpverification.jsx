import React from "react";
import "../styles/verification.css";
import { useAppDispatch } from "../redux/store";
import "../styles/signup.css";
import Button from "../components/button";
import { loginSuccess } from "../redux/authSlice";
import { signUpSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import Input from "../components/input";
import { Link } from "react-router-dom";

const OTPVerification = () => {
    const { errors, register, handleSubmit } = useSubmit(signUpSchema);
    const dispatch = useAppDispatch();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <React.Fragment>
            <div className="main">
                <div className="left-section">
                    <div className="imgg">
                        <div className="vector"></div>
                    </div>
                </div>
                <div className="opf">
                    <form onSubmit={handleSubmit(onSubmit)} className="right-section"></form>
                    <div className="container">
                        <div className="hdngs">
                            <h2>Verification</h2>
                            <p className="hdngs">Enter the Code sent to your email below.</p>
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
                            Didn't receive a code? <button className="hff">Resend</button>
                        </p>

                        <Link to="/">
                            <Button className="btn" borderVariant="8" variant="primary">
                                Continue
                            </Button>{" "}
                        </Link>
                        <p className="hdgp">
                            wrong email? <button className="hff">Reset</button>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OTPVerification;
