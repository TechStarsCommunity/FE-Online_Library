import "../styles/verification.css";
import { SignUpSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";

const OTPVerification = () => {
    const { errors, register, handleSubmit } = useSubmit(SignUpSchema);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
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
                            <p className="right-text">Enter the Code sent to your email below.</p>
                        </div>
                        <div className="container">
                            <h2 className="code-label">Code</h2>
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
                        <p className="texts">
                            Didn't receive a code? <button className="btnn">Resend</button>
                        </p>
                        <button type="submit" className="button">
                            Continue
                        </button>{" "}
                        <p className="text">
                            wrong email? <button className="btnn">Reset</button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OTPVerification;
