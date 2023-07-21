import React from "react";
import "../styles/login.css";

const Login = () => {
    return (
        <React.Fragment>
            <div className="page">
                <div className="left">
                    <div className="left-content">
                        <h1>Welcome!</h1>
                        <p>Sign in to continue</p>
                        <form>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    placeholder="Type your email"
                                    autoComplete="email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    placeholder="8+ characters"
                                    autoComplete="current-password"
                                />
                            </div>
                            <button>Login</button>
                        </form>
                        <h5>
                            Don{`'`}t have an Account? <a href="register">Sign Up</a>
                        </h5>
                        <button>Login as Admin</button>
                    </div>
                </div>
                <div className="right">
                    <img src={"../assets/image_icon.png"} alt="image" />
                </div>
            </div>
        </React.Fragment>
    );
};
export default Login;
