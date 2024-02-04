import { Link, useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";
import { useState } from "react";

import { SuccessToast } from "@/utils/toast";
import { useVerifyEmailMutation } from "@/services/mutation/auth";
import "../styles/verification.css";

const OTPVerification = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { mutateAsync: verifyEmail } = useVerifyEmailMutation();

    const onSubmit = async (value) => {
        setLoading(true);
        try {
            const response = await verifyEmail({ otp: value });
            if (!response) {
                return;
            }
            SuccessToast(response?.message);
            navigate("/");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main">
            <div className="otp-left-section">
                <div className="imgg">
                    <div className="vector"></div>
                </div>
            </div>
            <div className="space">
                <form onSubmit={(e) => onSubmit(e)} className="right-section">
                    <div className="container">
                        <div>
                            <h2 className="head">Verification</h2>
                            <p className="right-text">Enter the Code sent to your email below.</p>
                        </div>
                        <div className="container">
                            <h2 className="code-label">Code</h2>
                            <PinInput
                                length={6}
                                initialValue=""
                                secret
                                secretDelay={100}
                                focus
                                onChange={(value, index) => {}}
                                type="numeric"
                                inputMode="number"
                                style={{ padding: "10px" }}
                                inputStyle={{ borderColor: "#35eab9" }}
                                inputFocusStyle={{ borderColor: "#10b2f3" }}
                                onComplete={(value, index) => onSubmit(value)}
                                autoSelect={true}
                                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                            />
                        </div>
                        <p className="texts">
                            Didn&apos;t receive a code? <button className="btnn">Resend</button>
                        </p>

                        <p className="text">
                            wrong email? <Link to="/signup">Reset</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OTPVerification;
