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
                <div className="pad">
                    <form onSubmit={handleSubmit(onSubmit)} className="right-section"></form>
                    <div className="container">
                        <div>
                            <h2 className="heading">Verification</h2>
                            <p className="right-text">Enter the Code sent to your email below.</p>
                        </div>

                        <div className="container">
                            <h2 className="code-label">Code</h2>
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
                        <p className="texts">
                            Didn't receive a code? <button className="btnn">Resend</button>
                        </p>

                        <Link to="/">
                            <Button className="btn" borderVariant="8" variant="primary">
                                Continue
                            </Button>{" "}
                        </Link>
                        <p className="text">
                            wrong email? <button className="btnn">Reset</button>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OTPVerification;
