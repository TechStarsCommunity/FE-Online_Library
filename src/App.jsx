import React from "react";
import "./styles/App.css";
import { RouterProvider } from "react-router-dom";
import BrowserRouter from "./routes";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/errorFallback.jsx";

function App() {
    return (
        <React.Fragment>
            <ErrorBoundary fallback={<ErrorFallback />}>
                <RouterProvider router={BrowserRouter} />
            </ErrorBoundary>
        </React.Fragment>
    );
}

export default App;