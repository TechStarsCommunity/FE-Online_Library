import { Link } from "react-router-dom";

import "../styles/button.css";

const Button = ({ children, variant, borderVariant, to, className, style, isLoading }) => {
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
                    {isLoading ? (
                        <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                        </svg>
                    ) : (
                        children
                    )}
                </button>
            )}
        </>
    );
};

export default Button;
