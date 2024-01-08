import { Link } from "react-router-dom";
import "../styles/button.css";

const Button = ({ children, variant, borderVariant, to, className, style }) => {
    let buttonClass = "btn"; // Default class

    if (variant === "primary") {
        buttonClass += " btn-primary";
    } else if (variant === "secondary") {
        buttonClass += " btn-secondary ";
    }
    if (borderVariant === "noRadius") {
        buttonClass += " btn-radius ";
    }
    if (className) {
        buttonClass += ` ${className}`;
    }
    return (
        <>
            {to ? (
                <Link className={buttonClass} style={style} to={to}>
                    {children}
                </Link>
            ) : (
                <button className={buttonClass} style={style}>
                    {children}
                </button>
            )}
        </>
    );
};

export default Button;
