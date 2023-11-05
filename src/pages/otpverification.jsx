import React, { useRef, useState } from "react";
import "../styles/verification.css";
import Button from "../components/button";
import { OTPVerificationSchema, SignUpSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import Input from "../components/input";
import { Link } from "react-router-dom";

const OTPVerification = () => {
    const { errors, register, handleSubmit } = useSubmit(OTPVerificationSchema);
    // Number of otp input fields
    const numOfOtp = 6;
    const [otp, setOtp] = useState(new Array(numOfOtp).fill(""));
    const [otpError, setOtpError] = useState(null);
    const otpBoxRef = useRef([]);

    const handleChange = (value, index) => {
        let newArr = [...otp];
        newArr[index] = value;
        setOtp(newArr);

        if (value && (index < numOfOtp - 1)) {
            otpBoxRef.current[index + 1].focus();
        }
    };

    const otpInput = Array(numOfOtp)
        .fill()
        .map((digit, index) => (
            <Input
                key={index}
                name="otp"
                type="number"
                value={digit}
                register={register}
                autoComplete="off"
                errors={errors}
                className="code"
                maxLength={1}
                ref={(references) => (otpBoxRef.current[index] = references)}
                onChange={(e) => handleChange(e.target.value, index)}
            />
        ));
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
                    <div className="right-section">
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
                                    <div className="flex flex-row flex-wrap">{otpInput}</div>
                                </div>
                            </div>
                            <p className="texts">
                                Didn't receive a code? <button className="btnn">Resend</button>
                            </p>
                            <Button type="submit" variant="primary">
                                Continue
                            </Button>{" "}
                            <p className="text">
                                wrong email? <button className="btnn">Reset</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OTPVerification;
