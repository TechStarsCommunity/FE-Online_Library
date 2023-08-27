import React from "react";
import "./styles/App.css";
import { lazy } from "react";
import { RouterProvider } from "react-router-dom";
import BrowserRouter from "./routes";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/errorFallback.jsx";
import Loading from "./components/loading";

const ErrorPage = lazy(() => import("./pages/errorPage"));
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const Uploads = lazy(() => import("./pages/uploads"));
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/about"));
const Search = lazy(() => import("./pages/search"));

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
