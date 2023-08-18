import React from "react";
import "../../styles/button.css";

const Button = ({ children, variant }) => {
    let buttonClass = "btn"; // Default class

    if (variant === "primary") {
        buttonClass += " btn-primary";
    } else if (variant === "secondary") {
        buttonClass += " btn-secondary ";
    }

    return <button className={buttonClass}>{children}</button>;
};

export default Button;
