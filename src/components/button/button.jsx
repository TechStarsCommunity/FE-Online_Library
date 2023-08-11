import React from "react";
import "../../styles/button.css";

const Button = ({ children }) => {
    return <button className="btn btn-primary">{children}</button>;
};

export default Button;
