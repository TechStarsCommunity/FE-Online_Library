import React from "react";
import "../styles/signup.css";

const Signup = () => {
    return (
        <React.Fragment>
            <div className="main">
                <div className="left-section">
                    <div className="imgg">
                        <img src="/assets/image.png" className="imge" />
                        <div className="vector">
                            <img src="/assets/vector.png" />
                        </div>
                    </div>
                </div>

                <div className="right-section">
                    <div className="hdngs">
                        <h2>WELCOME TO BOOKSLAB</h2>
                        <p>Register your account</p>
                    </div>
                    <form action="#" method="get">
                        <div className="htmlForms">
                            <label htmlFor="email">
                                <b>Name</b>
                            </label>
                            <input type="text" placeholder="Enter name" name="name" required />

                            <label htmlFor="username">
                                <b>Username</b>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                name="username"
                                required
                            />

                            <label htmlFor="email">
                                <b>Email</b>
                            </label>
                            <input type="email" placeholder="Enter Email" name="email" required />
                        </div>

                        <div className="htmlForms2">
                            <div className="htmlForms2-00">
                                <label htmlFor="psw">
                                    <p>Password</p>{" "}
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    name="psw"
                                    required
                                    minLength="8"
                                    pattern="[A-Za-z 0-5] {8}"
                                />
                            </div>
                            <div className="htmlForms2-00">
                                <label htmlFor="psw-repeat">
                                    <p>Confirm Password </p>{" "}
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="psw-repeat"
                                    required
                                    minLength="8"
                                    pattern="[A-Za-z 0-5] {8}"
                                />
                            </div>
                        </div>
                        <div className="btn-sgnup">
                            <button type="submit" className="btn">
                                Sign up
                            </button>
                            <p>
                                Already have an account? <a href="#">Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Signup;
