import React from "react";
import "../styles/verification.css";
import Button from "../components/button";
import { SignUpSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import Input from "../components/input";
import { Link } from "react-router-dom";

const OTPVerification = () => {
    const { errors, register, handleSubmit } = useSubmit(SignUpSchema);

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <React.Fragment>
            <div className="main">
                <div className="otp-left-section">
                    <div className="imgg">
                        <div className="vector"></div>
                    </div>
                </div>
                <div className="space">
                    <form onSubmit={handleSubmit(onSubmit)} className="right-section">
                        <div className="container">
                            <div>
                                <h2 className="head">Verification</h2>
                                <p className="right-text">
                                    Enter the Code sent to your email below.
                                </p>
                            </div>

                            <div className="container">
                                <h2 className="code-label">Code</h2>
                                <div className="code.container">
                                <div className="flex flex-row flex-wrap">
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
                            </div>
                            <p className="texts">
                                Didn't receive a code? <button className="btnn">Resend</button>
                            </p>

                            <Link to="/">
                                <button type="submit" className="button">
                                    Continue
                                </button>{" "}
                            </Link>
                            <p className="text">
                                wrong email? <button className="btnn">Reset</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OTPVerification;
