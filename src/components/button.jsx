import React from "react";
import "../styles/button.css";

const Button = ({ children, variant, borderVariant }) => {
    let buttonClass = "btn"; // Default class

    if (variant === "primary") {
        buttonClass += " btn-primary";
    } else if (variant === "secondary") {
        buttonClass += " btn-secondary ";
    }
    if (borderVariant === "noRadius") {
        buttonClass += " btn-radius ";
    }
    return <button className={buttonClass}>{children}</button>;
};

export default Button;
