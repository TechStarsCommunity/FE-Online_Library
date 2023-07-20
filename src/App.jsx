/* eslint-disable unicorn/filename-case */
import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Loading from "./components/loading";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const Uploads = lazy(() => import("./pages/uploads"));
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/about"));
const Search = lazy(() => import("./pages/search"));

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <Login />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <Signup />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/uploads"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <Uploads />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <Contact />
                            </React.Suspense>
                        }
                    />

                    <Route
                        path="/about"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <About />
                            </React.Suspense>
                        }
                    />

                    <Route
                        path="/search"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <Search />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <Login />
                            </React.Suspense>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
