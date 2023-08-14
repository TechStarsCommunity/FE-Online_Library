// "use client";
import { useErrorBoundary } from "react-error-boundary";

import "./errorFallback.css";
import Button from "../components/button/button";

const ErrorFallback = ({ error }) => {
    const { resetBoundary } = useErrorBoundary();
    // Call resetBoundary() to reset the error boundary and retry the render.

    return (
        <div role="alert" className="error__container">
            <div className="error__content">
                <p>Something went wrong:</p>
                <pre>{error.message}</pre>
                <Button variant="primary" onClick={resetBoundary} className="error__button">
                    Try again
                </Button>
            </div>
        </div>
    );
};

export default ErrorFallback;
