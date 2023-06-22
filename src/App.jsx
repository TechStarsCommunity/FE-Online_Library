import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const Uploads = lazy(() => import("./pages/uploads"));
const Contact = lazy(() => import("./pages/contact"));

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Login />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Signup />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/uploads"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Uploads />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Contact />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
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
